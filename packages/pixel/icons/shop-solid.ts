import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelShopSolidIcon],svg[pixel-shop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7v2h-1v1H2V9H1V7h1V6h1V4h1V3h16v1h1v2h1v1zm-9 4v9h-1v1H4v-1H3v-9h2v5h7v-5zm5 0h2v10h-2z"></svg:path>`,
})
export class PixelShopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
