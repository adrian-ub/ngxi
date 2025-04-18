import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardMinusIcon],svg[pixelarticons-credit-card-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h12v-2H4v-6h16V8H4V6h16zm0 0h2v8h-2zm2 12h-6v2h6z"></svg:path>`,
})
export class PixelarticonsCreditCardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
