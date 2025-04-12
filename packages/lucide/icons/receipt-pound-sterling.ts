import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptPoundSterlingIcon],svg[lucide-receipt-pound-sterling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 11h5"></svg:path><svg:path d="M10 17V9.5a2.5 2.5 0 0 1 5 0M8 17h7"></svg:path></svg:g>`
})
export class LucideReceiptPoundSterlingIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
