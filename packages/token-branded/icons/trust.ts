import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTrustIcon],svg[token-branded-trust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0500FF" d="M3.9 5.6L12 3v18c-5.786-2.4-8.1-7-8.1-9.6z"></svg:path><svg:path fill="url(#tokenBrandedTrust0)" d="M20.1 5.6L12 3v18c5.786-2.4 8.1-7 8.1-9.6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTrust0" x1="17.948" x2="11.967" y1="1.74" y2="20.797" gradientUnits="userSpaceOnUse"><svg:stop offset=".02" stop-color="#00F"></svg:stop><svg:stop offset=".08" stop-color="#0094FF"></svg:stop><svg:stop offset=".16" stop-color="#48FF91"></svg:stop><svg:stop offset=".42" stop-color="#0094FF"></svg:stop><svg:stop offset=".68" stop-color="#0038FF"></svg:stop><svg:stop offset=".9" stop-color="#0500FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTrustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
