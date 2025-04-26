import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   x: any;
 
    
   
  login() {
    this.x=1;
  
  }

  logout() {
    this.x=0;
  
  }
}
