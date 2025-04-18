import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptSubtractIcon],svg[streamline-receipt-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6.5H3m9-6H2.5a2 2 0 0 0-2 2v11L3 12l2.5 1.5L8 12l2.5 1.5V2a1.5 1.5 0 1 1 3 0v3.5h-3"></svg:path>`,
})
export class StreamlineReceiptSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
