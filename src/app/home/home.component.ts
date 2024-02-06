import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cartItems: any[] = [];

  // addToCart(item: any): void {
  //   this.cartItems.push(item);
  //   console.log('Success!');
  // }
  addToCart() {
    console.log('Add to Cart Works!');
  }
}
