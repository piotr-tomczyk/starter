import { Injectable } from '@angular/core';

import { Hive } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Hive[] = [];

  constructor(private http: HttpClient) {

  }

  addToCart(hive: Hive) {
    this.items.push(hive);
  }
  getItems(): Hive[] {
    return this.items;
  }
  clearCart(): Hive[] {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>
      ('assets/shipping.json');
  }
}
