import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';
import { Response } from '../response';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent {

  userName : string;
  showDashboard(response : Response){
    this.userName = response.adminName;
  }
  
}
