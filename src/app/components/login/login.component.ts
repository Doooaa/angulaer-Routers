import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule ,RouterModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  loginLoign: any;
  constructor(private Myauthservices: AuthService,private router:Router) {}
  LoginFormValidation = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  getAllErrorsEmail() {
    const emailControl = this.LoginFormValidation.get('email');

    if (emailControl?.hasError('required')) {
      return 'Email is required';
    } else if (emailControl?.hasError('email')) {
      return 'Email is not valid';
    } else {
      return null;
    }
  }
  getAllErrorsPassword() {
    const passwordControl = this.LoginFormValidation.get('password');

    if (passwordControl?.hasError('required')) {
      return 'Password is required';
    } else if (passwordControl?.hasError('minlength')) {
      return 'Password must be at least 6 characters long';
    } else {
      return null;
    }
  }

  login() {
    if (this.LoginFormValidation.valid) {
    
      this.Myauthservices.login();
      
      this.router.navigate(['/home']);
      console.log('Login successful!'+this.Myauthservices.loginTrue);
    } else {
      console.log('Form is invalid');
    }
  }
}
