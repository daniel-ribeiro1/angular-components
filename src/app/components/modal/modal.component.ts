import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [CommonModule],
  standalone: true,
  host: {
    '(click)': 'onClickOutside($event)',
  },
})
export class ModalComponent {
  @ViewChild('modal')
  private readonly _modalElementRef?: ElementRef<HTMLDivElement>;

  @Input({ required: true }) isOpen!: WritableSignal<boolean>;
  @Input() modalStyle?: Object;

  onClickOutside(event: PointerEvent) {
    if (!this._modalElementRef) return;

    const modalElement = this._modalElementRef.nativeElement;

    if (
      !modalElement.isSameNode(event.target as Node) &&
      !modalElement.contains(event.target as Node)
    )
      this.isOpen.set(false);
  }
}
