import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input({ required: true }) _base!: string;
  @Input({ required: true }) _name!: string;
  @Input() _size = '1rem';
  @Input() _color = 'inherit'
}
