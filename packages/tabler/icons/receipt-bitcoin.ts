import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerReceiptBitcoinIcon],svg[tabler-receipt-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2l-2 2l-2-2l-2 2l-2-2z"></svg:path><svg:path d="M9 7h4.09C14.145 7 15 7.895 15 9s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H9m1-4h4m-4-5v10v-9m3-1v1m0 8v1"></svg:path></svg:g>`,
})
export class TablerReceiptBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
