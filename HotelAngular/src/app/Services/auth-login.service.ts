import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../Models/ilogin';
import { LoginResult } from '../Models/login-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private http: HttpClient) { }

  login(model: ILogin):Observable<LoginResult>
  {
    return this.http.post<LoginResult>(`${environment.baseApi}${environment.AuthLoginApi}`, model);
  }

  saveToken(token: string):void
  {
    localStorage.setItem('Token', token);
  }
  getToken():string |null
  {
   return localStorage.getItem('Token');
  }
}
