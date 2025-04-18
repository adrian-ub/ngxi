import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSatoshiV2OutlineIcon],svg[bitcoin-icons-satoshi-v2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7 7.91h10m-5-2.455V3m0 18v-2.455M7 12h10M7 16.09h10"></svg:path>`,
})
export class BitcoinIconsSatoshiV2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
