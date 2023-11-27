import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserMessageRequestModel } from '../models/userMessageRequestModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getContact(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Accept-Language': 'az' }
      )
    };
    return this.httpClient.get<any>(environment.contact, httpOptions);
  }

  sendMessage(messageModel: UserMessageRequestModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Accept-Language': 'az' }
      )
    };
    return this.httpClient.post<any>(environment.contactMessage, messageModel, httpOptions);
  }
}
