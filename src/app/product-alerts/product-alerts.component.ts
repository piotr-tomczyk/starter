import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hive } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss', '../app.component.scss']
})
export class ProductAlertsComponent {
  @Input() hive!: Hive;
  @Output() notify = new EventEmitter();
}
