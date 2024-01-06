import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '@components/icon/icon.component';

import { InputComponent } from '@components/input/input.component';
import { AutofocusDirective } from '@directives/autofocus.directive';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [ReactiveFormsModule, AutofocusDirective, IconComponent],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent extends InputComponent {
  isHidden = signal(true);

  readonly inputPasswordType = {
    show: 'text',
    hidden: 'password',
  };

  readonly icon = {
    show: 'bi-eye',
    hidden: 'bi-eye-slash-fill',
  };

  togglePasswordVisibility() {
    this.isHidden.update((currentValue) => !currentValue);
  }
}
