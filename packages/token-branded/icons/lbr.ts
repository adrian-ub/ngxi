import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLbrIcon],svg[token-branded-lbr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLbr0)" d="M3.6 18h6.402l-4.284-4.83L12 5.388l6.378 7.782L13.95 18h6.45v-1.8h-2.574l2.574-3.03L12 3L3.6 13.17l2.664 3.03H3.6zm16.8 1.2H3.6V21h16.8z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLbr0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB9C96"></svg:stop><svg:stop offset="1" stop-color="#5C9DED"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLbrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
