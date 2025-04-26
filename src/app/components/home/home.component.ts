import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  sliderImages = [
    {
      image: 'images/img-1.jpg',
      title: 'Summer Collection',
      description: 'Discover our new arrivals',
    },
    {
      image: 'images/img-2.jpg',
      title: 'Limited Offer',
      description: '50% off selected items',
    },
    {
      image: 'images/img-3.jpg',
      title: 'Premium Quality',
      description: 'Shop the finest materials',
    },
  ];
  categoryArray: string[] = [
    'skin care',
    'hair care',
    'makeup',
    'nail care',
    'body care',
    'fragrance',
    'tools & brushes',
    'Cleansers',
    'Anti-Aging',
    'Lip Care',
    'Night Creams',
    'Oils & Balms',
    'Essences',
  ];

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
    {
      productName: 'the MAX™ masque',
      productPrice: 554,
      productDescription:
        'This hydrogel mask delivers instant hydration to skin that is dry',
      productImage:
        'https://imageskincare.co.uk/cdn/shop/files/Powerplumduo.webp?v=1709815229&width=700',
      productRating: '5',
      productCategory: 'skin care',
    },
    {
      productName: 'the MAX™ masque',
      productPrice: 554,
      productDescription:
        'This hydrogel mask delivers instant hydration to skin that is dry',
      productImage:
        'https://imageskincare.co.uk/cdn/shop/products/DOUBLE-CLEANSE-POWER-DUO_800x_30da8ae9-bdf9-4d6b-bdf4-c6c5e1abf02d.jpg?v=1709815240&width=800',
      productRating: '5',
      productCategory: 'skin care',
    },
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
  ];
  index: number = 0;
  pre() {
    if (this.index > 0) {
      this.index = this.index - 1;
    }
  }
  next() {
    if (this.index < this.sliderImages.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }
}
