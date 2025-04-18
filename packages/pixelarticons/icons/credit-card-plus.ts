import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardPlusIcon],svg[pixelarticons-credit-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h18v2H4v2h16v4H4v6h10v2H2zm20 0h-2v8h2zm-4 10h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></svg:path>`,
})
export class PixelarticonsCreditCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
