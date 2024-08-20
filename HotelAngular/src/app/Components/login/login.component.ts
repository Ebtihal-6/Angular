import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResult } from 'src/app/Models/login-result';
import { AuthLoginService } from 'src/app/Services/auth-login.service';

declare var bootstrap: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  modalMessage: string= '';

  @ViewChild('modal') modal: ElementRef | undefined;

  constructor(private loginService: AuthLoginService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializationForm();
  }
  private initializationForm() 
  {
    this.loginForm= this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const loginObj = this.loginForm.value;
      this.loginService.login(loginObj).subscribe(
        (res: LoginResult) => {
          if (res && res.token) {
            alert('Login is Successful!')
            this.loginService.saveToken(res.token);
            this.router.navigateByUrl('/Clients')
            
          } else {
            this.modalMessage = 'Login failed: No token received.';
            this.showModal();
          }
        },
        error => {
          this.modalMessage = 'Login failed: An error occurred.';
          console.error('Login error:', error);
          this.showModal();
        }
      );
    } else {
      this.modalMessage = 'Please fill in all required fields.';
      this.showModal();
    }
  }

  private showModal(): void {
    if (this.modal) {
      const modalElement = this.modal.nativeElement as HTMLElement;
      const bootstrapModal = new bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }

  onModalClose(): void {
    if (this.modal) {
      const modalElement = this.modal.nativeElement as HTMLElement;
      const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
      bootstrapModal.hide();
    }
  }

}
