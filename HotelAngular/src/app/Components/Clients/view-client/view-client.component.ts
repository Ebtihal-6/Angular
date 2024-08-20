
import { Component, OnInit } from '@angular/core';
import { ClientInterface, ClientsRoot } from 'src/app/Models/client-interface';
import { AuthLoginService } from 'src/app/Services/auth-login.service';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
  clients: ClientInterface[] = [];
  pageNumber = 1;
  pageSize = 50;
  errorMessage: string | null = null;

  constructor(private clientService: ClientServiceService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients(this.pageNumber, this.pageSize).subscribe({
      next: (data: ClientsRoot) => {
        this.clients = data.result; // Use `data.result` to get the list of clients
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load clients. Please try again later.';
        console.error(error);
      }
    });
  }
}
