import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hives, Hive } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss', '../app.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  hive: Hive | undefined;
  constructor(private route: ActivatedRoute) {
    console.log(route);
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const hiveIdFromRoute = Number(routeParams.get('hiveId'));
    this.hive = hives.find(hive => hive.id === hiveIdFromRoute);
  }
}
