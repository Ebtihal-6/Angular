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

  setSessionId(sessionId: string) {
    localStorage.setItem('sessionID', sessionId);
  }

  getSessionId(): string | null {
    return localStorage.getItem('sessionID');
  }

  clearSessionId() {
    localStorage.removeItem('sessionID');
  }
  setUserId(UserId: string) {
    localStorage.setItem('UserId', UserId);
  }

  getUserId(): string | null {
    return localStorage.getItem('UserId');
  }
  setBranchId(branchId: number): void {
    localStorage.setItem('BranchId', branchId.toString());
  }

  getBranchId(): number | null {
    const branchId = localStorage.getItem('BranchId');
    return branchId !== null ? Number(branchId) : null;
  }
}
