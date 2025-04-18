import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyBitcoinIcon],svg[tabler-currency-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6H6M8 6v12m0-6h6M9 3v3m4-3v3M9 18v3m4-3v3"></svg:path>`,
})
export class TablerCurrencyBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
