import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.servise';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;

addToCart(product) {
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}
  constructor(
    private route:ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramms=>{this.product=products[+paramms.get('productId')];})
  }

}
