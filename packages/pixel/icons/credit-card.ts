import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCreditCardIcon],svg[pixel-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm-1 13H3v-7h18zm0-10H3V6h18z"></svg:path><svg:path fill="currentColor" d="M4 15h4v1H4zm6 0h6v1h-6z"></svg:path>`,
})
export class PixelCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
