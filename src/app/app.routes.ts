import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/Product/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundedComponent } from './components/not-founded/not-founded.component';
import { RegisterComponent } from './components/register/register.component';
import { ParentProductComponent } from './components/Product/parent-product/parent-product.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // Simple redirect
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  //{path:'addProduct',component:AddProductComponent},
  { path: 'productsPage', component: ParentProductComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  // {path: 'showProduct',loadComponent:()=>import('./components/Product/show-product/show-product.component').then(m=>m.ShowProductComponent) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundedComponent },
];
