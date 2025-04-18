import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxReceiptIcon],svg[bx-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1M5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1zm15-1a1 1 0 0 1-2 0v-5h2z"></svg:path><svg:path fill="currentColor" d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"></svg:path>`,
})
export class BxReceiptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
