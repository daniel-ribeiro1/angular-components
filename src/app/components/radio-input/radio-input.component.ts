import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { IconComponent } from '@components/icon/icon.component';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.scss',
})
export class RadioInputComponent {
  @Input() _id = '';
  @Input() _size = '1rem';
  @Input() _label?: string;
  @Input({ required: true }) _value!: string | number | boolean | null;
  @Input({ required: true }) _name!: string;
  @Input({ required: true }) _formControl!: FormControl<
    string | number | boolean | null
  >;

  readonly checkedIcon = 'bi-circle-fill';
}
