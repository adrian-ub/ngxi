import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEcoinIcon],svg[token-branded-ecoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEcoin0)" fill-rule="evenodd" d="M12 20.437a8.438 8.438 0 1 0 0-16.875a8.438 8.438 0 0 0 0 16.875M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedEcoin1)" d="M11.92 4.69c-2.403 0-3.752 1.046-4.15 1.301l2.623 1.179c.665-.195 1.571-.226 1.94-.218c3.948.256 4.769 3.87 4.686 5.61H8.487c.473 2.26 1.91 2.812 3.66 2.812c1.52 0 2.671-1.176 2.671-1.687h1.778c-.696 2.456-2.733 3.388-4.263 3.388a6.8 6.8 0 0 1-1.94-.268l-2.635 1.2c1.504 1.134 3.677 1.343 4.575 1.305c5.18 0 6.98-4.655 6.98-7.19c0-5.838-4.8-7.433-7.393-7.433"></svg:path><svg:path fill="url(#tokenBrandedEcoin2)" d="M12.141 8.625c-2.253 0-3.283 1.86-3.515 2.813h6.75c-.14-.923-1.253-2.813-3.235-2.813"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEcoin0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CDAE26"></svg:stop><svg:stop offset=".409" stop-color="#F9DA3B"></svg:stop><svg:stop offset=".757" stop-color="#EDC62D"></svg:stop><svg:stop offset="1" stop-color="#CEAF26"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEcoin1" x1="12.001" x2="12.001" y1="2.999" y2="20.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CDAE26"></svg:stop><svg:stop offset=".409" stop-color="#F9DA3B"></svg:stop><svg:stop offset=".757" stop-color="#EDC62D"></svg:stop><svg:stop offset="1" stop-color="#CEAF26"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEcoin2" x1="12.001" x2="12.001" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CDAE26"></svg:stop><svg:stop offset=".409" stop-color="#F9DA3B"></svg:stop><svg:stop offset=".757" stop-color="#EDC62D"></svg:stop><svg:stop offset="1" stop-color="#CEAF26"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
