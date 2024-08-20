import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/Services/auth-login.service';
import { ExpensesService } from 'src/app/Services/expenses.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  // expensesForm: FormGroup;

  // constructor(private fb: FormBuilder, private expensesService: ExpensesService) {
  //   this.expensesForm = this.fb.group({
  //     Name: ['', Validators.required],
  //     No: [0, [Validators.required, Validators.min(0)]],
  //     Value: [0, [Validators.required, Validators.min(0)]],
  //     Date_Time: ['', Validators.required],
  //     SideId: [''],
  //     SideName: [''],
  //     Casher_Id: [''],
  //     Session_Id: [''],
  //     branchId: [null] // Assume branchId is a required input
  //   });
  // }

  // ngOnInit() {}

  // onSubmit() {
  //   debugger;
  //   if (this.expensesForm.valid) {
  //     this.expensesService.addExpense(this.expensesForm.value).subscribe(
  //       response => {
  //         console.log('Expense added successfully', response);
  //       },
  //       error => {
  //         console.error('Error adding expense', error);
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  SRootForm: FormGroup;
  rootForm: FormGroup;
  sessionId: string | null = null;
  BranchId: number | null = null;
  UserId: string | null = null;

  constructor(private fb: FormBuilder, private rootService: ExpensesService, private authService: AuthLoginService) {
    this.rootForm = this.fb.group({
      SessionId: [''], 
      UserActualBalance: [0, [Validators.required, Validators.min(0)]],
      TakenAmmount: [0, [Validators.required, Validators.min(0)]]
    });
    
    this.SRootForm = this.fb.group({
      BranchId: [0],
      UserId: [''],
      MachineName: ['', [Validators.required]],
      OpenBalance: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.sessionId =this.rootService.getNewSessionId();
    if (this.sessionId) {
      this.rootForm.patchValue({ SessionId: this.sessionId });
    }
    this.BranchId = this.authService.getBranchId();
    if (this.BranchId) {
      this.SRootForm.patchValue({ BranchId: this.BranchId });
    }
    this.UserId = this.authService.getUserId(); // Assuming you have a method to get UserId
    if (this.UserId) {
      this.SRootForm.patchValue({ UserId: this.UserId });
    }
  }

  onSubmit() {
    console.log('End Session Form Value:', this.rootForm.value);
    
    if (this.rootForm.valid) {
      this.rootService.addSRootData(this.rootForm.value).subscribe(
        response => {
          console.log('End Session Data added successfully', response);
          
        },
        error => {
          console.error('Error adding End Session data', error);
        }
      );
    } else {
      console.log('End Session Form is invalid');
    }
  }

  onStartSubmit() {
    console.log('Start Session Form Value:', this.SRootForm.value);
    
    if (this.SRootForm.valid) {
      this.rootService.addSERootData(this.SRootForm.value).subscribe(
        response => {
          console.log('Start Session Data added successfully', response.Id);
          this.rootService.setNewSessionId(response.Id)
        },
        error => {
          console.error('Error adding Start Session data', error);
        }
      );
    } else {
      console.log('Start Session Form is invalid');
    }
  }
}

