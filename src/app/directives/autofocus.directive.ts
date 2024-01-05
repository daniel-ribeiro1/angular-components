import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'input[autoFocus]',
  standalone: true,
})
export class AutofocusDirective implements AfterViewInit {
  @Input('autoFocus') autoFocus = false;

  constructor(private readonly _elementRef: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    if (this.autoFocus) {
      this._elementRef.nativeElement.focus();
    }
  }
}
