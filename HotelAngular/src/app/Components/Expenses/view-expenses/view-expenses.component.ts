import { Component, OnInit } from '@angular/core';
import { GetExpens, Root } from 'src/app/Models/get-expens';
import { ExpensesService } from 'src/app/Services/expenses.service';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.css']
})
export class ViewExpensesComponent implements OnInit {
  expense: GetExpens[] = [];
  pageNumber = 1;
  pageSize = 50;
  errorMessage: string | null = null;

  constructor(private expService: ExpensesService) { }

  ngOnInit(): void {
    this.loadExp();
  }

  loadExp(): void {
    this.expService.getExpenses(this.pageNumber, this.pageSize).subscribe({
      next: (data: Root) => {
        this.expense = data.result; 
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load clients. Please try again later.';
        console.error(error);
      }
    });
  }

}
