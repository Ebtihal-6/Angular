import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../Services/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthLoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getSessionId()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
