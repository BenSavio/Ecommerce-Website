import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  order = this.cartService.getorder();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("Order Details:", this.order);
    this.emptycart()
  }

  emptycart() {
    this.cartService.removeAllCart();
  }
}

