import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWalletFillIcon],svg[ri-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 9h19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1zm1-6h15v4h-16V4a1 1 0 0 1 1-1m12 11v2h3v-2z"></svg:path>`,
})
export class RiWalletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
