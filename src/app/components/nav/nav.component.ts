import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
})
export class NavComponent  implements OnInit ,OnChanges{
   @Input() xx: any;
  constructor(private authService: AuthService) {
    
  }
  ngOnInit() {
    
    this.xx=this.authService.x;
    // this.authService.x = true;
    console.log(this.authService.x+ "data of x from service in nav  on init component✔✔🟢🔥🔥");
  }
  logOut() {
    this.authService.logout();
    console.log(this.authService.x+ "data of x from service in out❌❌❌❄👉");
 
  }
  ngOnChanges() {
    this.xx=this.authService.x;
    console.log(this.authService.x+ "data of x from service in nav  on changes component✔✔🟢🔥🔥");
  }


}
