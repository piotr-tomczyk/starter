import { Component } from '@angular/core';
import { hives, Hive } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  hives: Hive[] = hives;
  share(hive: Hive): void {
    alert(`${hive.name} has ${hive.numberOfBees} of bees 😼.`);
  }
  onNotify() {
    alert('You will be notified when the owner dies. 💀')
  }
}
