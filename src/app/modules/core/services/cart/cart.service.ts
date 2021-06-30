import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable().pipe(map((prod) => prod.length));

  constructor() {}

  addCart(prod: Product) {
    this.products = [...this.products, prod];
    // emmit to all suscribbers
    this.cart.next(this.products);
  }
}
