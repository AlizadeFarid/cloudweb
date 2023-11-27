import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';
import AOS from "aos";


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  homeData: any;

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getHomeData();
    AOS.init();
  }

  getHomeData(): void {
    this.homeService.getHomeData().subscribe(
      (res: any) => {
        this.homeData = res.data;
      },
      (error) => {
        console.error('Xəta baş verdi:', error);
      }
    );
  }

}


