import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import AOS from "aos";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  servicesData: any;
  constructor(
    private servicesService: ServicesService,
  ) { }

  ngOnInit(): void {
    this.getServicesData();
    AOS.init();
  }

  getServicesData(): void {
    this.servicesService.getServices().subscribe(
      (res: any) => {
        this.servicesData = res.data;
      },
      (error) => {
        console.error('Xəta baş verdi:', error);
      }
    );
  }
}
