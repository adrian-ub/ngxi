import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelShoppingCartIcon],svg[pixel-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h1v2H9v1H7v-1H6v-2h1v-1h2zm11 0h1v2h-1v1h-2v-1h-1v-2h1v-1h2zM4 3V2H1v2h3v3h1v5h1v4h1v1h13v-2H8v-2h12v-1h1V9h1V6h1V3zm16 3v3h-1v2H7V7H6V5h15v1z"></svg:path>`,
})
export class PixelShoppingCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
