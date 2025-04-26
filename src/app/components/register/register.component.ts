import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {

  
  RegisterFormValidation = new FormGroup({
    name:new FormControl( '', [Validators.required, Validators.minLength(3)]),
    email:new FormControl( '', [Validators.required, Validators.email]),
    password:new FormControl( '', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });
  
  // Error Methods
  getAllErrorsName() {
    const name = this.RegisterFormValidation.get('name');
    if (name?.hasError('required')) return 'Name is required';
    if (name?.hasError('minlength')) return 'Name must be at least 3 characters';
    return null;
  }
  
  getAllErrorsEmail() {
    const email = this.RegisterFormValidation.get('email');
    if (email?.hasError('required')) return 'Email is required';
    if (email?.hasError('email')) return 'Invalid email format';
    return null;
  }
  
  getAllErrorsPassword() {
    const password = this.RegisterFormValidation.get('password');
    if (password?.hasError('required')) return 'Password is required';
    if (password?.hasError('minlength')) return 'Password must be at least 6 characters';
    return null;
  }
  
  getAllErrorsConfirmPassword() {
    const confirmPassword = this.RegisterFormValidation.get('confirmPassword');
    if (confirmPassword?.hasError('required')) return 'Confirm password is required';
    return null;
  }
  
  // Register Method
  register() {
    
    // if (this.RegisterFormValidation.valid) {
    //   console.log(this.RegisterFormValidation.value);
    //   // هنا تبعت الداتا للسيرفر مثلا
    // } else {
    //   this.RegisterFormValidation.markAllAsTouched(); // عشان تظهر كل الErrors
    // }
  }
  
}
