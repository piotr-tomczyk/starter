import { Injectable } from '@angular/core';

import { hives, Hive } from './products';
@Injectable({
  providedIn: 'root'
})
export class HivesService {
  addHive(hive: Hive) {
    hives.push(hive);
  }
  getHives(): Hive[] {
    return hives;
  }
  getHighestID(): number {
    return hives.length;
  }
  deleteHive(hive: Hive) {
    for (let i = 0; i < hives.length; i++) {
      if (hives[i] === hive) {
        hives.splice(i, 1);
        return;
      }
    }
  }
}