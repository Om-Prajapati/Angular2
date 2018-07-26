import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users;
  constructor(
    private loginServiceService: LoginServiceService
  ) { }

  ngOnInit() {
  }

  submit() {
      console.log('In ts');
      this.loginServiceService.loginService().subscribe(data => {
        console.log('response', data);
        this.users = data;
      });
  }
}
