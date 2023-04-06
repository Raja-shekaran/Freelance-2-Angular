import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import{ HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  isAuthenticated =false;
  
  constructor(private _http : HttpClient,private _router : Router) { }

  authenticate(user:User):boolean{
    if(this.loginUserFromRemote(user)){
      this.isAuthenticated=true;
      return true;
  }
  this.isAuthenticated=false;
    return false;
}

  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user)
  }

  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser",user);
  }

  handleError(error: Response){

  }
}
