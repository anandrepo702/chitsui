import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { Response } from '../response';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = new User();
  response = new Response();
  msg = '';

  constructor(private loginService : LoginService, private router : Router) { }

  registerUser(){
    this.loginService.RegisterUserFromRemote(this.user).subscribe(
      data => {
        console.log(data)
        this.response = data;

        if (this.response.statusCode === "200") {
          alert('Registration success')
          this.router.navigate(['/login'])
        } else if (this.response.statusCode === "409"){
          this.msg = "User Already exists"
        } else {
          this.msg = "Bad Credentials"
        }
      },
      error => {
        console.log("Errrrorrrrrrrrrrrrrrrrrrrrrrrrrrr")
      }
      
    )
  }

 

}
