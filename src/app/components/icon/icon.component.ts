import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input({ required: true }) _base!: string;
  @Input({ required: true }) _name!: string;
  @Input({ transform: (size: number) => `${size}rem` }) size = '1rem';
}
