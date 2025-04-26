import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  isLoggedIn: any;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService?.isLoggedIn; 
     console.log('isLoggedIn from nav component:', this.isLoggedIn);
  }
  logOut() {
    this.authService.logout();

    console.log('User logged out from nav component:', this.isLoggedIn);
  }


}
