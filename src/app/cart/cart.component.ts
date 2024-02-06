import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../all-products/products';
import { CartService } from '../Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: Iproduct[] = [];
  tempList: Iproduct[] = [];
  ptotal = 0;
  discount = 0;
  finalAmount = 0;
  subTotal = 0;
  taxTotal = 0;
  shippingTotal = 0;
  grandTotal = 0;

  constructor(public _cartService: CartService) {
    this.tempList = this._cartService.productList;
    this.calculate();
  }
  calculate() {
    this.finalAmount = 0;
    this.subTotal = 0;
    this.taxTotal = 0;
    this.shippingTotal = 0;
    this.grandTotal = 0;
    this.tempList.forEach((itm) => {
      const d = (itm.discount / 100) * itm.price;
      itm.finalAmount = itm.quantity * (itm.price - d);
      // Subtotal
      this.subTotal = this.subTotal + itm.finalAmount;
      // Tax amount
      this.taxTotal = (5 / 100) * this.subTotal;
      // Shopping Amount
      this.shippingTotal = (15 / 100) * this.taxTotal;
      // Grand Total
      this.grandTotal =
        this.finalAmount + this.subTotal + this.taxTotal + this.shippingTotal;
    });
  }
  getImageUrlCart(product: Iproduct) {
    return '/assets/' + product.imageName;
  }

  removeItem(itemId: number): void {
    this.finalAmount = this.finalAmount - this.tempList[itemId].price;
    console.log('asdfkjbsa', itemId);
    this.tempList.splice(itemId, 1);
    this.calculate();
  }
  onDropdownChange($event: any, index: number) {
    if ($event) {
      const selectedQuantity = $event.target.value;

      // Update the quantity in your tempList
      this.tempList[index].quantity = selectedQuantity;

      // // Recalculate the final amount for the item
      const d =
        (this.tempList[index].discount / 100) * this.tempList[index].price;
      this.tempList[index].finalAmount =
        selectedQuantity * (this.tempList[index].price - d);

      // Recalculate the totals
      this.calculateTotals();
    }
  }

  calculateTotals() {
    // Recalculate subTotal
    this.subTotal = this.tempList.reduce(
      (total, item) => total + item.finalAmount,
      0
    );

    // Recalculate taxTotal
    this.taxTotal = (5 / 100) * this.subTotal;

    // Recalculate shippingTotal
    this.shippingTotal = (15 / 100) * this.taxTotal;

    // Recalculate grandTotal
    this.grandTotal =
      this.finalAmount + this.subTotal + this.taxTotal + this.shippingTotal;
  }
  ngOnInit() {}
}
