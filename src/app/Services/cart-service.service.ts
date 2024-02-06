import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iproduct } from '../all-products/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartData';
  productList: Iproduct[] = [];

  constructor() {
    const storedCartData = localStorage.getItem(this.cartKey);
    this.productList = storedCartData ? JSON.parse(storedCartData) : [];
  }

  addToCart(product: Iproduct[]) {
    this.productList = product;

    localStorage.setItem(this.cartKey, JSON.stringify(this.productList));
    return this.productList;
  }

  getSpecificData(key: string): any {
    const storedDataString = localStorage.getItem(this.cartKey);

    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      return storedData[key];
    } else {
      console.error('No data found in localStorage');
      return null;
    }
  }

  getProductDetails(productId: string): Iproduct | undefined {
    const numericProductId = Number(productId);
    return this.productList.find((product) => product.id === numericProductId);
  }
}
