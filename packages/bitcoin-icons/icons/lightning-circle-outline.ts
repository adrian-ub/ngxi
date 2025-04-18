import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLightningCircleOutlineIcon],svg[bitcoin-icons-lightning-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5"></svg:circle><svg:path d="m16.778 10.965l-6.286 6.083c-.208.2-.534-.051-.392-.302l2.295-4.06a.125.125 0 0 0-.11-.186H7.31a.125.125 0 0 1-.087-.215l5.728-5.524c.203-.195.523.04.397.292l-1.758 3.516a.125.125 0 0 0 .112.181h4.99c.111 0 .167.137.086.215Z"></svg:path></svg:g>`,
})
export class BitcoinIconsLightningCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
