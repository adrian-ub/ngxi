import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTroveIcon],svg[token-branded-trove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTrove0)" d="M14.897 19.198a2.83 2.83 0 0 0 2.515 1.52h2.172a1.413 1.413 0 0 0 1.254-2.066L13.254 4.04a1.417 1.417 0 0 0-2.51 0L3.16 18.652a1.412 1.412 0 0 0 1.255 2.065h1.93a2.84 2.84 0 0 0 2.464-1.434l2.144-3.793a2.13 2.13 0 0 1-.81-.816a2.25 2.25 0 1 1 3.713 0a2.14 2.14 0 0 1-.872.85z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTrove0" x1="11.999" x2="11.999" y1="3.275" y2="20.717" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6036EF"></svg:stop><svg:stop offset="1" stop-color="#746E89"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTroveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
