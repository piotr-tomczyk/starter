import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { hives, Hive } from '../products';
import { CartService } from '../service-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  hive: Hive | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    console.log(route);
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const hiveIdFromRoute = Number(routeParams.get('hiveId'));
    this.hive = hives.find(hive => hive.id === hiveIdFromRoute);
  }

  addToCart(hive: Hive) {
    this.cartService.addToCart(hive);
    alert(`${hive.name} has been added to the cart!`);
  }
  addBees(hive: Hive) {
    hive.numberOfBees++;
  }
}
