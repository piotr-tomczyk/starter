import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../service-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]]
  });
  get name() {
    return this.checkoutForm.get('name');
  }
  get address() {
    return this.checkoutForm.get('address');
  }
  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { }
  onSubmit(): void {
    if (this.checkoutForm.valid) {
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
    }
  }
}
