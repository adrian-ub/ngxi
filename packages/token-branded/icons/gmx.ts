import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGmxIcon],svg[token-branded-gmx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedGmx0)" d="M21 19L12.015 5L3 19h12.56l-3.55-5.345l-1.75 2.845H8.385l3.63-5.65L17.26 19z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGmx0" x1="12.65" x2="6.375" y1="5.365" y2="20.33" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#03D1CF" stop-opacity=".99"></svg:stop><svg:stop offset="1" stop-color="#4E09F8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGmxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
