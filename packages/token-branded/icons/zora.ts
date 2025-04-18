import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZoraIcon],svg[token-branded-zora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedZora0)" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path><svg:defs><svg:radialgradient id="tokenBrandedZora0" cx="0" cy="0" r="1" gradientTransform="rotate(180 8.043 3.92)scale(15.2029)" gradientUnits="userSpaceOnUse"><svg:stop offset=".007" stop-color="#F2CEFE"></svg:stop><svg:stop offset=".191" stop-color="#AFBAF1"></svg:stop><svg:stop offset=".498" stop-color="#4281D3"></svg:stop><svg:stop offset=".667" stop-color="#2E427D"></svg:stop><svg:stop offset=".823" stop-color="#230101"></svg:stop><svg:stop offset="1" stop-color="#8F6B40"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class TokenBrandedZoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
