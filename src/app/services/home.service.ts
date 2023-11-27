import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetHomeRequestModel } from '../models/getHomeRequestModel';
import { BaseResponseWithMultiDataModel } from '../models/baseResponseWithMultiDataModel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getHomeData(): Observable<GetHomeRequestModel> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Accept-Language': 'az' }
      )
    };
    return this.httpClient.get<GetHomeRequestModel>(environment.home, httpOptions);
  }
}
