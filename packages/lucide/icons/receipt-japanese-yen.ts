import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptJapaneseYenIcon],svg[lucide-receipt-japanese-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm8 8l3-3"></svg:path><svg:path d="m9 7l3 3v7.5M9 11h6m-6 4h6"></svg:path></svg:g>`
})
export class LucideReceiptJapaneseYenIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
