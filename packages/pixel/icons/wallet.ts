import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelWalletIcon],svg[pixel-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12v1h1v2h-1v1h-2v-1h-1v-2h1v-1z"></svg:path><svg:path fill="currentColor" d="M23 8v13h-1v1H2v-1H1V3h1V2h19v1h1v1H3v16h18V9H5V7h17v1z"></svg:path>`,
})
export class PixelWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
