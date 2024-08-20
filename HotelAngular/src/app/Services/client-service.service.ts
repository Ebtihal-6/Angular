import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientInterface } from '../Models/client-interface';
import { AuthLoginService } from './auth-login.service';
import { AddClient } from '../Models/add-client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  httpOptions: any;
  constructor(private http: HttpClient,
    private auth: AuthLoginService
  ) {}

  getClients(pageNumber: number, pageSize: number): Observable<any> {

    const params = new HttpParams()
      .set('dto.pageNumber', pageNumber.toString())
      .set('dto.pageSize', pageSize.toString());

    return this.http.get(`${environment.baseApi}${environment.clientApi}`, { params });
  }
  // httpOptions;
  // constructor( private httpReq : HttpClient,
  //   private auth: AuthLoginService
  // ) { 
  //   this.httpOptions= {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorizathion': `Bearer ${auth.getToken()}`
  //     })
  //   };
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // addClient(newClient: ClientInterface):Observable<ClientInterface> {
  //   return this.http.post<ClientInterface>(`${environment.baseApi}/client_no`, JSON.stringify(newClient))
  //   .pipe( 
  //     retry(2),
  //     catchError(this.handleError)
  //   )
  // }
  addClient(client: AddClient): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post(`http://192.168.1.150:7000/api/clients`, client, { headers });
  }
}
