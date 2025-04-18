import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRingIcon],svg[token-branded-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRing0)" d="M4.35 9.728a1.125 1.125 0 1 0-.45 0v5.422h.45zm8.418 1.162c.446-.713.97-1.22 1.482-1.55v4.033a1.125 1.125 0 1 0 .45 0V9.09c.36-.164.7-.24.987-.24h1.263v5.422a1.126 1.126 0 1 0 .45 0V8.85h2.25v5.423a1.124 1.124 0 1 0 .45 0V8.85h.9V8.4h-5.313c-1.005 0-2.363.725-3.329 2.298a1.35 1.35 0 0 0-1.175 2.377a4.95 4.95 0 0 1-1.433 1.44v-3.887a1.125 1.125 0 1 0-.45 0v4.144c-.525.26-1.032.378-1.434.378H3v.45h4.866c1.074 0 2.67-.695 3.717-2.315a1.35 1.35 0 0 0 1.185-2.395M6.6 9.728a1.125 1.125 0 1 1 .45 0v5.422H6.6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRing0" x1="5.761" x2="9.954" y1="8.89" y2="18.73" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4530DD"></svg:stop><svg:stop offset="1" stop-color="#FB3777"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
