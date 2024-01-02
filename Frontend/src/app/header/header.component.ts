import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = '';
  public totalItem: number = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.cartService.getProduct()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }


  searchProducts() {
    this.productService.updateSearchTerm(this.searchTerm.trim());
  }

  test() {
    const user = this.authService.getUser();
    console.log(user);
    alert(user.username)
  }

  isButtonNeeded(): boolean {
    if (this.authService.getUser()) {
      return true;
    } else {
      return false;
    }
  }
}
