import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public LoginUserFromRemote(user : User):Observable<any>{
      return this.http.post<any>("http://localhost:8090/chits/admin/login",user)
  }

  public RegisterUserFromRemote(user : User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/chits/admin/register",user)
  }

  public showChitsDashBoard(user : User){
    return this.http.post<any>("http://localhost:8090/chits/admin/show-chits-dashboard",user)
  }


  


}
