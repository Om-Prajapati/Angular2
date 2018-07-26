import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  httpLogin() {
     return  this.httpClient.get('http://localhost:8080/allUsers');
  }
}
