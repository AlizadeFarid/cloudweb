import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMessageRequestModel } from 'src/app/models/userMessageRequestModel';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';
import AOS from "aos";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData: any;
  addMessageForm: FormGroup;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPortfoliosData();
    this.userMessageForm();
    AOS.init();
  }

  getPortfoliosData(): void {
    this.contactService.getContact().subscribe(
      (res: any) => {
        this.contactData = res.data;
      },
      (error) => {
        console.error('Xəta baş verdi:', error);
      }
    );
  }

  //Add User Form
  userMessageForm() {
    (this.addMessageForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      email: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    }))
  }

  //Create User
  createMessage() {
    if (this.addMessageForm.valid) {

      let messageModel: UserMessageRequestModel = Object.assign(
        {},
        this.addMessageForm.value
      );
      this.contactService.sendMessage(messageModel).subscribe(
        (res) => {
          if (this.addMessageForm.valid) {
            this.toastr.success('Mesajınız göndərildi');
            this.addMessageForm.reset();
          }
        },
        (err) => {
          this.toastr.error('Mesajınız göndərilmədi');
        }

      )
    }
  }

  showSuccess() {
    this.toastr.success('Hello world!');
    console.log('resr');

  }

}
