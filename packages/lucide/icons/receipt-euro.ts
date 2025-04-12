import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptEuroIcon],svg[lucide-receipt-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 10h5"></svg:path><svg:path d="M16 9.5a4 4 0 1 0 0 5.2"></svg:path></svg:g>`
})
export class LucideReceiptEuroIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
