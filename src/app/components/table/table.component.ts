import { Component, Input } from '@angular/core';

import { CellTypeEnum, ITableConfig } from './table.model';
import { CheckboxInputComponent } from '@components/checkbox-input/checkbox-input.component';
import { RadioInputComponent } from '@components/radio-input/radio-input.component';
import { IconComponent } from '@components/icon/icon.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CheckboxInputComponent, RadioInputComponent, IconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true }) _config!: ITableConfig;
  @Input() _width = '100%';
  @Input() _maxWidth = '100%';
  @Input() _minWidth = '375px';

  readonly cellTypeEnum = CellTypeEnum;
}
