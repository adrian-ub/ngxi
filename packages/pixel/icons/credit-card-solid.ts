import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCreditCardSolidIcon],svg[pixel-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11v8h1v1h20v-1h1v-8zm3 4h4v1H4zm6 0h6v1h-6zM23 5v3H1V5h1V4h20v1z"></svg:path>`,
})
export class PixelCreditCardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
