import { Component } from '@angular/core';
import { Iproduct } from './products';
import { CartService } from '../Services/cart-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  products: Iproduct[] = [];
  addedToCart: boolean = false;
  cart: Iproduct[] = [];

  constructor(private cartService: CartService) {
    this.products = [
      {
        id: 0,
        description:
          'A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.',
        name: 'Shredder',
        imageName: 'first.jpg',
        category: 'Heads',
        price: 1275.5,
        discount: 2,
        quantity: 1,
        finalAmount: 0,
      },
      {
        id: 1,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        imageName: 'second.jpg',
        category: "Men's Clothing",
        price: 109.95,
        discount: 10,
        finalAmount: 0,
        quantity: 1,
      },
      {
        id: 2,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        name: 'Mens Casual Premium Slim Fit T-Shirts',
        imageName: 'third.jpg',
        category: 'Bases',
        price: 1190.5,
        discount: 5,
        finalAmount: 0,
        quantity: 1,
      },
      {
        id: 3,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        imageName: 'fourth.jpg',
        category: 'Jewelery',
        price: 695,
        discount: 15,
        finalAmount: 0,
        quantity: 1,
      },
      {
        id: 4,
        description:
          'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        name: 'Solid Gold Petite Micropave',
        imageName: 'fifth.jpg',
        category: 'Heads',
        price: 168,
        discount: 15,
        quantity: 1,
        finalAmount: 0,
      },
      {
        id: 5,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        name: 'White Gold Plated Princess',
        imageName: 'sixth.jpg',
        category: 'Jewelery',
        price: 99.99,
        discount: 10,
        quantity: 1,
        finalAmount: 0,
      },
      {
        id: 6,
        description:
          'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        imageName: 'seventh.jpg',
        category: 'Jewelery',
        price: 105.5,
        discount: 13,
        quantity: 1,
        finalAmount: 0,
      },
      {
        id: 7,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        imageName: 'eighth.jpg',
        category: 'Jewelery',
        price: 695,
        discount: 15,
        quantity: 1,
        finalAmount: 0,
      },
    ];
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getImageUrl(product: Iproduct) {
    return '/assets/' + product.imageName;
  }

  addToCart(product: Iproduct) {
    this.cart.push(product);
    this.cartService.addToCart(this.cart);
    window.alert('Product added to cart successfully!');
  }
}
