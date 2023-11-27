import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetServicesRequestModel } from '../models/getServicesRequestModel';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getServices(): Observable<GetServicesRequestModel> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Accept-Language': 'az' }
      )
    };
    return this.httpClient.get<GetServicesRequestModel>(environment.services, httpOptions);
  }
}
