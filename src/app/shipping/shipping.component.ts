import { Component } from '@angular/core';

import { CartService } from '../service-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {

  shippingCosts = this.cartService.getShippingPrices();
  constructor(private cartService: CartService) {
  }

}
