import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AutofocusDirective } from '@directives/autofocus.directive';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, AutofocusDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input({ required: true }) _formControl!: FormControl<any>;

  @Input() _id?: string;
  @Input() _name?: string;
  @Input() _autoFocus?: boolean;
  @Input() _type = 'text';
  @Input() _autoComplete = 'off';
  @Input() _placeholder = '';
}
