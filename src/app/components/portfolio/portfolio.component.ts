import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from 'src/app/services/portfolios.service';
import AOS from "aos";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfoliosData: any;
  constructor(
    private portoliosService: PortfoliosService,
  ) { }

  ngOnInit(): void {
    this.getPortfoliosData();
    AOS.init();
  }

  getPortfoliosData(): void {
    this.portoliosService.getPortfolios().subscribe(
      (res: any) => {
        this.portfoliosData = res.data;
      },
      (error) => {
        console.error('Xəta baş verdi:', error);
      }
    );
  }
}
