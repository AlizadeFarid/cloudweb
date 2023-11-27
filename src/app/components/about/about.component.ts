import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import AOS from "aos";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData: any;
  constructor(
    private aboutService: AboutService,
  ) { }

  ngOnInit(): void {
    this.getAboutData();
    AOS.init();
  }

  getAboutData(): void {
    this.aboutService.getAboutData().subscribe(
      (res: any) => {
        this.aboutData = res.data;

      },
      (error) => {
        console.error('Xəta baş verdi:', error);
      }
    );
  }


}
