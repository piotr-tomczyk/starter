import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { HivesService } from '../hives.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  constructor(private hivesService: HivesService, private formBuilder: FormBuilder) { }
  addForm = this.formBuilder.group({
    id: '',
    name: ['', [Validators.compose([Validators.required])]],
    numberOfBees: ['0', [Validators.compose([Validators.required, Validators.min(1)])]],
    description: '',
  });
  get name() {
    return this.addForm.get('name');
  }
  get numberOfBees() {
    return this.addForm.get('numberOfBees');
  }
  onSubmit(): void {
    console.log(this.addForm);
    if (this.addForm.valid) {
      console.warn('Your order has been submitted', this.addForm.value);
      this.addForm.value.id = this.hivesService.getHighestID() + 1;
      this.hivesService.addHive(this.addForm.value);
      this.addForm.reset();
    }
  }
}
