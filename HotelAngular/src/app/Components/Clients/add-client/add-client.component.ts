import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Branch, Car, AddClient } from 'src/app/Models/add-client';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientServiceService, private router: Router) {
    this.clientForm = this.fb.group({
      client_no: [null, Validators.required],
      client_name: ['', Validators.required],
      client_phone: ['', Validators.required],
      client_email: ['', [Validators.required, Validators.email]],
      client_address: [''],
      client_resident: [''],
      Is_customer: [false],
      Is_vendor: [false],
      trade_no: [''],
      description: [''],
      branch_id: [null],
      OpenedCreditor: [0],
      OpenedDepitor: [0],
      DiscountPercentPerItem: [0],
      DiscountPercentPerBill: [0],
      Is_InstallmentClient: [false],
      CategoryId: [null],
      ClientType: [0],
      GuarantorName: [''],
      GuarantorNationId: [''],
      GuarantorAddress: [''],
      NationId: [''],
      IsBlocked: [false],
      branches: this.fb.array([]),
      cars: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // Optionally, initialize with default values
    this.addBranch(); // Add one default branch if needed
    this.addCar(); // Add one default car if needed
  }

  get branches() {
    return this.clientForm.get('branches') as FormArray;
  }

  get cars() {
    return this.clientForm.get('cars') as FormArray;
  }

  addBranch(branch?: Branch) {
    this.branches.push(this.fb.group({
      Id: [branch?.Id || ''],
      branch_no: [branch?.branch_no || null],
      branch_name: [branch?.branch_name || ''],
      branch_phone: [branch?.branch_phone || ''],
      branch_mobile: [branch?.branch_mobile || ''],
      branch_manager: [branch?.branch_manager || '']
    }));
  }

  removeBranch(index: number) {
    this.branches.removeAt(index);
  }

  addCar(car?: Car) {
    this.cars.push(this.fb.group({
      Id: [car?.Id || ''],
      No: [car?.No || null],
      CarName: [car?.CarName || ''],
      ChassisNo: [car?.ChassisNo || ''],
      PlateNo: [car?.PlateNo || ''],
      Kilometres: [car?.Kilometres || null]
    }));
  }

  removeCar(index: number) {
    this.cars.removeAt(index);
  }

  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Form data:', this.clientForm.value);
      this.clientService.addClient(this.clientForm.value).subscribe({
        next: (response) => {
          console.log('Client added successfully', response);
          this.router.navigate(['/Clients']); // Navigate on success
        },
        error: (error) => {
          console.error('Error adding client', error);
          // Handle error
        }
      });
    } else {
      console.error('Form is invalid:', this.clientForm.errors);
    }
  }
}
