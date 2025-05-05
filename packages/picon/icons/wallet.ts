import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWalletIcon],svg[picon-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7V1h6v1h1v4H7v1M5 3v2h2V3"></svg:path>`,
})
export class PiconWalletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
