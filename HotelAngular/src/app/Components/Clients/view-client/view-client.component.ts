import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/Models/client-interface';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
  clients: ClientInterface[]=[];
  constructor(
    private clientService :ClientServiceService
  ) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((client)=>{
      this.clients=client;
    })
  }

}
