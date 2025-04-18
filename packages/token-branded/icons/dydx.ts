import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDydxIcon],svg[token-branded-dydx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M16.146 3L3.643 21h3.838L20.048 3z"></svg:path><svg:path fill="url(#tokenBrandedDydx0)" d="m7.886 3l3.677 5.303l-1.922 2.893L3.965 3z"></svg:path><svg:path fill="url(#tokenBrandedDydx1)" d="m16.52 21l-4.082-5.87l1.922-2.808L20.357 21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDydx0" x1="10.318" x2="21.947" y1="5.471" y2="19.465" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity=".55"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDydx1" x1="17.4" x2="10.888" y1="19.637" y2="10.901" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6966FF"></svg:stop><svg:stop offset="1" stop-color="#6966FF" stop-opacity=".36"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDydxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
