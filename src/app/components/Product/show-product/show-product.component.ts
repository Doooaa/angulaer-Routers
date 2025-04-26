import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-product.component.html',
  styles: ``,
})
export class ShowProductComponent implements OnChanges {
  @Input() productObject: any = {};
  ProductsArray: {
    productName: string;
    productPrice: number;
    productDescription: string;
    productImage: string;
    productRating: string;
    productCategory: string;
  }[] = [
    {
      productName: 'dojopa',
      productPrice: 100,
      productDescription: 'for dry skin',
      productImage:
        'https://imageskincare.co.uk/cdn/shop/files/I_MASK_hydrating_hydrogel_sheet_mask_PDP_R01a.jpg?v=1713440990&width=600',
      productRating: '5',
      productCategory: 'skin care',
    },
    {
      productName: 'Product 2',
      productPrice: 200,
      productDescription:
        'This hydrogel mask delivers instant hydration to skin that is dry',
      productImage:
        'https://imageskincare.co.uk/cdn/shop/products/VITAL-C-hydrating-intensemoisturizer-05.jpg?v=1740664751&width=1000',
      productRating: '4',
      productCategory: 'skincare',
    },
    {
      productName: 'the MAX™ masque',
      productPrice: 554,
      productDescription:
        'This hydrogel mask delivers instant hydration to skin that is dry',
      productImage:
        'https://imageskincare.co.uk/cdn/shop/products/THE-MAX-MASQUE-PDP-R01a.jpg?v=1692630743&width=500',
      productRating: '5',
      productCategory: 'skin care',
    },
  ];
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected:', changes);
    if (!changes['productObject'].firstChange) {
      this.ProductsArray.push(this.productObject);
    }
  }
}
