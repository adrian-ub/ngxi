import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelWalletSolidIcon],svg[pixel-wallet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V7H4V5h18V3h-1V2H2v1H1v18h1v1h20v-1h1V8zm-1 7h-1v1h-2v-1h-1v-2h1v-1h2v1h1z"></svg:path>`,
})
export class PixelWalletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
