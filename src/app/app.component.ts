import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/Product/add-product/add-product.component';
import { ShowProductComponent } from './components/Product/show-product/show-product.component';
import { NavComponent } from "./components/nav/nav.component";

@Component({
  //decorator
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterModule, NavComponent],
  //selector: 'app-root', //name of the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day6'; 
}
