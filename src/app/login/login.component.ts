import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Response } from '../response';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = new User();
  response = new Response();
  msg : string;
  constructor(private loginService : LoginService, private router : Router, private homeComponent : HomeComponent){}
  
  loginUser(){
    this.loginService.LoginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data)
        this.response = data;
        if (this.response.statusCode === "200") {
          this.router.navigate(['/home'])
          this.homeComponent.showDashboard(this.response)
        } else {
          this.msg = this.response.statusMessage;
        }
      },
      error => {
        console.log("Errrrorrrrrrrrrrrrrrrrrrrrrrrrrrr")
      }
      
    )
  }

  registerRedirect(){
    this.router.navigate(['/register'])
  }

}
