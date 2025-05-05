import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBitcoinIcon],svg[picon-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v1H3V0m1 7v1H3V7M2 0v8H1V0m5 7H0V6h5V4H2V3h3V2H0V1h6"></svg:path>`,
})
export class PiconBitcoinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
