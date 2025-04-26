import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-add-product',
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styles: ``,
})
export class AddProductComponent {
   obj:any = {}
  @Output() myevent = new EventEmitter();
 
    FormValidation = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z 0-9]*$'),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[0-9]*$'),
    ]),
    des: new FormControl('', [Validators.maxLength(100)]),
    img: new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+'),
    ]),
    rate: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    cat: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z 0-9]*$'),
    ]),
  });
  addProduct() {
    let productObjectData = {
      productName: this.FormValidation.controls['name'].value,
      productPrice: this.FormValidation.controls['price'].value,
      productDescription: this.FormValidation.controls['des'].value,
      productImage: this.FormValidation.controls['img'].value,
      productRating: this.FormValidation.controls['rate'].value,
      productCategory: this.FormValidation.controls['cat'].value,
    };
    this.myevent.emit(productObjectData);
    
    console.log('data from child component--->', productObjectData);
  }
  get productname() {
    console.log('data name🎯-->',this.FormValidation.controls['name'].valid);
    console.log('data name💥-->',this.FormValidation.controls.name.errors);
    return this.FormValidation.controls['name'].valid;
  }
  
  


}
