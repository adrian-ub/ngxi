import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelShoppingCartSolidIcon],svg[pixel-shopping-cart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h1v2H9v1H7v-1H6v-2h1v-1h2zm11 0h1v2h-1v1h-2v-1h-1v-2h1v-1h2zm3-16v3h-1v3h-1v3h-1v1H8v2h12v2H7v-1H6v-4H5V7H4V4H1V2h3v1z"></svg:path>`,
})
export class PixelShoppingCartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
