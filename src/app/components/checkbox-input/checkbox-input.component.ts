import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { IconComponent } from '@components/icon/icon.component';
import { InputComponent } from '@components/input/input.component';

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, IconComponent],
  templateUrl: './checkbox-input.component.html',
  styleUrl: './checkbox-input.component.scss',
})
export class CheckboxInputComponent {
  @Input() _id = '';
  @Input() _label?: string;
  @Input() _name = '';
  @Input() _size = '1rem';
  @Input({ required: true }) _formControl!: FormControl<boolean>;

  readonly checkedIcon = 'bi-check';
}
