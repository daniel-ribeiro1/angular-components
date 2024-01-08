import { FormControl } from '@angular/forms';

export enum CellTypeEnum {
  TEXT = 'TEXT',
  CHECKBOX = 'CHECKBOX',
  RADIO = 'RADIO',
  ICON = 'ICON',
}

interface ITableCell {
  class?: string;
  style?: Object;
  colSpan?: number;
}

export interface ITextCell extends ITableCell {
  type: CellTypeEnum.TEXT;
  text: string;
}

export interface ICheckboxCell extends ITableCell {
  id: string;
  type: CellTypeEnum.CHECKBOX;
  label?: string;
  name?: string;
  control: FormControl<boolean>;
  onClick?: (checked: boolean) => void;
}

export interface IRadioCell extends ITableCell {
  id: string;
  type: CellTypeEnum.RADIO;
  label?: string;
  name: string;
  value: string | number | boolean | null;
  control: FormControl<string | number | boolean | null>;
  onClick?: () => void;
}

export interface IIconCell extends ITableCell {
  type: CellTypeEnum.ICON;
  icon: string;
  label?: string;
  labelPosition?: 'left' | 'right';
  onClick?: () => void;
}

export type TableHeadType = ITextCell | ICheckboxCell | IRadioCell | IIconCell;
export type TableRowType = (TableHeadType & { rowSpan?: number })[];

export interface ITableConfig {
  head: TableHeadType[];
  rows: TableRowType[];
}
