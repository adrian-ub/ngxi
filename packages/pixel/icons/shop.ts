import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelShopIcon],svg[pixel-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11v9h-1v1H4v-1H3v-9h2v5h7v-5zm5 0h2v10h-2zm3-4V6h-1V4h-1V3H4v1H3v2H2v1H1v2h1v1h20V9h1V7zM3 8V7h1V6h1V5h14v1h1v1h1v1z"></svg:path>`,
})
export class PixelShopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
