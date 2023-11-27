import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPorftoliosRequestModel } from '../models/getPortfoliosRequestModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {

  constructor(private httpClient: HttpClient) { }

  getPortfolios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Accept-Language': 'az' }
      )
    };
    return this.httpClient.get<any>(environment.portfolios, httpOptions);
  }
}
