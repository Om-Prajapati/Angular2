import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private httpServiceService: HttpServiceService
  ) { }

  loginService(): any {
      console.log('In service');
      return this.httpServiceService.httpLogin();
  }
}
