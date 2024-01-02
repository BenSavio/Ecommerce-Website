import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product/product.model';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  public productList: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.filteredProducts = [...this.products];
    });
    this.cartService.getProduct().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })

    this.productService.currentSearchTerm.subscribe(term => {
      if (term.trim() !== '') {
        this.filteredProducts = this.products.filter(product =>
          product.title.toLowerCase().includes(term.toLowerCase())
        );
      } else {
        this.filteredProducts = [...this.products];

      }
    });

  }

  user = this.authService.getUser();


  handleClick(event: MouseEvent) {

    if (this.authService.getUser()) {

      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  addtocart(product: any) {

    this.cartService.addtoCart(product);
    console.log("ProductId", product.id);

    return true;

  }

  // addtocart(product: any) {
  //   const existingProductIndex = this.productList.findIndex((item: Product) => item._id === product._id);
  // console.log(product);

  //   if (existingProductIndex !== -1) {
  //     // Product already exists in the cart, increment its quantity
  //     this.productList[existingProductIndex].quantity += 1;

  //   } else {
  //     // Product doesn't exist in the cart, add it to the list
  //     this.productList.push({ ...product, quantity: 1, total: product.price });
  //   }

  //   // Update the cart after handling both cases
  //   this.cartService.updateProduct(this.productList);
  // }


  // addToCart(product: Product) {
  //   const existingProductIndex = this.productList.findIndex((item: Product) => item._id === product._id);

  //   if (existingProductIndex !== -1) {
  //     // If the product already exists in the cart, update the quantity
  //     this.productList[existingProductIndex].quantity += 1;
  //     this.productList[existingProductIndex].total = this.productList[existingProductIndex].quantity * this.productList[existingProductIndex].price;
  //   } else {
  //     // If the product doesn't exist in the cart, add it
  //     this.productList.push({ ...product, quantity: 1, total: product.price });
  //   }

  //   // Update the cart or emit the updated productList
  //   this.cartService.updateProduct(this.productList);
  // }
}