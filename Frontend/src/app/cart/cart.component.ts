import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  user = this.authService.getUser();
  containerVisible = false;


  public newOrder = {
    userId: this.user._id,
    product: [],
    // [ 
    // {
    //   productId:this.products.id,
    //   quantity:this.products.quantity
    // }
    // ],
    amount: this.cartService.getTotalPrice(),
    address: ''
  }


  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.products = res;
        this.newOrder.product = this.products
        this.grandTotal = this.cartService.getTotalPrice();
      });
    console.log(this.products);

    // console.log(this.products._id);
    // console.log(this.products.title);


    console.log(this.user);
    console.log("userId:", this.user._id);

  }


  removeItem(product: any) {
    this.cartService.removeCartItem(product);

  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  order(): void {

    console.log(this.newOrder);
    if (this.newOrder.address && this.newOrder.amount && this.newOrder.product && this.newOrder.userId) {
      this.sendOrderData();

    } else {
      console.log('Please provide Address!');
      alert('Please provide Address!')

    }
  }

  sendOrderData() {
    this.productService.addOrder(this.newOrder).subscribe(
      (Response) => {
        console.log("Order Successful", Response);
        this.cartService.setorder(Response);
        alert("Order Successful!")
        this.router.navigate(['/orders'])
      },
      (error) => {
        console.error("Order Failed:", error)
      }
    )
  }

  orderData = this.cartService.getorder();
 
  toggleContainer() {
    this.containerVisible = !this.containerVisible;
    console.log(this.orderData);
  }
  
}
