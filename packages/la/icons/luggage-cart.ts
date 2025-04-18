import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLuggageCartIcon],svg[la-luggage-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6c-1.645 0-3 1.355-3 3h-6v12h18V9h-6c0-1.645-1.355-3-3-3M4 7v2h1c.555 0 1 .445 1 1v11c0 2.21 1.79 4 4 4h18v-2H10c-1.191 0-2-.809-2-2V10c0-1.645-1.355-3-3-3zm20.5 18a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-12 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M19 8c.555 0 1 .445 1 1h-2c0-.555.445-1 1-1m-7 3h14v8H12z"></svg:path>`,
})
export class LaLuggageCartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
