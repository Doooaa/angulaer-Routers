import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   loginTrue:any;
 get isLoggedIn() {
    this.loginTrue = localStorage.getItem('isLoggedIn');
    return  this.loginTrue === 'true' ? true : false;
  }
  
  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.setItem('isLoggedIn','false');
   
  }
}
