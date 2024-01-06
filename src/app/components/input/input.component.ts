import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { IconComponent } from '@components/icon/icon.component';
import { AutofocusDirective } from '@directives/autofocus.directive';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, AutofocusDirective, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input({ required: true }) _formControl!: FormControl<any>;

  @Input() _id = '';
  @Input() _name = '';
  @Input() _autoFocus = false;
  @Input() _type = 'text';
  @Input() _autoComplete = 'off';
  @Input() _placeholder = '';
  @Input() _iconPosition: 'left' | 'right' = 'right';
  @Input() _icon?: string;
}
