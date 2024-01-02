import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // newProduct = {
  //   title: '',
  //   description: '',
  //   img: '',
  //   categories: '',
  //   price: 0,
  // };

  // constructor (private productService: ProductService , private router: Router){}

  // save(): void {
  //   if (this.newProduct.title && this.newProduct.categories && this.newProduct.price && this.newProduct.description) {
  //     this.sendNewProduct();
  //   } else {
  //     console.log('Please provide title, price, description, category.');
  //   }
  // }

  // sendNewProduct() {
  //   this.productService.addProduct(this.newProduct).subscribe(
  //     (response) => {
  //       console.log('AddProduct successful:', response);
  //       this.router.navigate(['/']);
  //     },
  //     (error) => {
  //       console.error('AddProduct failed:', error);
  //     }
  //   );
  // }
}
