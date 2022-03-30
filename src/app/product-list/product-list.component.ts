import { Component } from '@angular/core';

import { hives, Hive } from '../products';
import { HivesService } from '../hives.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  hives: Hive[] = hives;
  constructor(private hivesService: HivesService) {
  }
  getHivesService(): HivesService {
    return this.hivesService;
  }
  share(hive: Hive): void {
    alert(`${hive.name} has ${hive.numberOfBees} of bees 😼.`);
  }
  onNotify() {
    alert('You will be notified when the owner dies. 💀')
  }
}
