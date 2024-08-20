import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SRoot, SSRoot } from '../Models/push-expens';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {


  constructor(private http: HttpClient) { }

  getExpenses(pageNumber: number, pageSize: number): Observable<any> {

    const params = new HttpParams()
      .set('dto.pageNumber', pageNumber.toString())
      .set('dto.pageSize', pageSize.toString());

    return this.http.get(`${environment.baseApi}${environment.expenseApi}`, { params });
  }



  addSRootData(data: SRoot): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log('Sending data to API:', data);

    return this.http.post(`${environment.baseApi}${environment.sessionApi}${environment.EndSessionApi}`, data, { headers });
  }
  addSERootData(data: SSRoot): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log('Sending data to API:', data);

    return this.http.post(`${environment.baseApi}${environment.sessionApi}${environment.StartSessionApi}`, data, { headers });
  }
  
  setNewSessionId(sessionId: string) {
    localStorage.setItem('StartSessionID', sessionId);
  }

  getNewSessionId(): string | null {
    return localStorage.getItem('StartSessionID');
  }

}
