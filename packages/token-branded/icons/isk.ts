import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIskIcon],svg[token-branded-isk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedIsk0)" d="m11.896 3l6.688 6.556a3.3 3.3 0 0 1 0 4.737l-2.06 2.018l-4.624-4.534A6.123 6.123 0 0 1 11.9 3zm.208 18l-6.688-6.556a3.3 3.3 0 0 1 0-4.737l2.06-2.018l4.623 4.534a6.125 6.125 0 0 1 0 8.777z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedIsk0" x1="16.294" x2="6.692" y1="3.993" y2="19.654" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FA2A9B"></svg:stop><svg:stop offset=".39" stop-color="#6691DA"></svg:stop><svg:stop offset=".57" stop-color="#2BAAEA"></svg:stop><svg:stop offset="1" stop-color="#003A9F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedIskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
