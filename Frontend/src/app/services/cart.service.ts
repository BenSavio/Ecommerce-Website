import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    const index = this.cartItemList.findIndex((item: any) => item.id === product.id);
    if (index !== -1) {
      this.cartItemList.splice(index, 1);
      this.productList.next(this.cartItemList);
    }
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  order: any

  setorder(orderData: any) {
    return this.order = orderData
  }

  getorder() {
    return this.order
  }
}