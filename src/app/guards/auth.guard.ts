// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      // User is logged in, allow access to the route
      return true; // allowed to go to Home
    } else {
      this.router.navigate(['/register']); // redirect to login page
      return false;
    }
  }
}
