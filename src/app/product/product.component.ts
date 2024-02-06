import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../all-products/products';
import { CartService } from '../Services/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  singleProduct: any;
  testId: string = '';
  cart: Iproduct[] = [];
  products: Iproduct[] = [];
  finalProduct: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.route.params.subscribe((params: { [x: string]: string }) => {
      this.testId = params['id'];
      this.singleProduct = localStorage.getItem('products');
      const final: Array<any> = JSON.parse(this.singleProduct);
      this.finalProduct = final.filter((a) => a.id == this.testId);
      console.log(this.finalProduct);
    });
  }

  getImageUrlSingle(product: Iproduct) {
    return '/assets/' + product.imageName;
  }
}
