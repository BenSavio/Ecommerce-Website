// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order, Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:7000/api';

  // addProduct(newProduct : any){
  //   return this.http.post(`${this.apiUrl}/products`,newProduct)
  // }

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(`${this.apiUrl}/products`);
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }

  addOrder(newOrder: any) {
    return this.http.post(`${this.apiUrl}/orders`, newOrder)
  }

  // getOrder(userId: string): Observable<Order[]> {
  //   return this.http.get<Order[]>(`${this.apiUrl}/orders/find/${userId}`);
  // }

  private searchTermSource = new BehaviorSubject<string>('');
  currentSearchTerm = this.searchTermSource.asObservable();

  updateSearchTerm(term: string) {
    this.searchTermSource.next(term);
  }

}
