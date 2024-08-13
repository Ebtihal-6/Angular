import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientInterface } from '../Models/client-interface';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor( private httpReq : HttpClient) { 

  }
  getClients() :Observable<ClientInterface[]>{
    return this.httpReq.get<ClientInterface[]>(`${environment.baseApi}`)
  }
}
