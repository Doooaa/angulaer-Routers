import { Component } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { ShowProductComponent } from '../show-product/show-product.component';

@Component({
  selector: 'app-parent-product',
  imports: [AddProductComponent ,ShowProductComponent],
  templateUrl: './parent-product.component.html',
  
})
export class ParentProductComponent {
  objectDataFromCtP:any={}
  dataObj(data:any){
    this.objectDataFromCtP=data;
    console.log('data from child to parent',this.objectDataFromCtP)
  }
}
