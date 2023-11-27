import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  getTeam(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Accept-Language': 'az' }
      )
    };
    return this.httpClient.get<any>(environment.team, httpOptions);
  }
}
