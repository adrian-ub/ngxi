import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilLuggageCartIcon],svg[uil-luggage-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13.5v2a1 1 0 0 0 1 1h10a3 3 0 0 0 6 0h2a1 1 0 0 0 1-1v-8a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7H4v-1a1 1 0 0 0-2 0m13 3a1 1 0 1 1 1 1a1 1 0 0 1-1-1m-7-6h12v4h-1.78a3 3 0 0 0-4.44 0H8Zm0-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1H8Z"></svg:path>`,
})
export class UilLuggageCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
