import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGgIcon],svg[token-branded-gg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5F2596" d="M3 16.875V10.6l3 1.56v6.325z"></svg:path><svg:path fill="url(#tokenBrandedGg0)" d="M21 16.875V10.6l-3 1.56v6.325z"></svg:path><svg:path fill="url(#tokenBrandedGg1)" d="M12 15.06L6 18.5v-6.3l6-3.38z"></svg:path><svg:path fill="#5E2693" d="m12 15.06l6 3.44v-6.3l-6-3.38z"></svg:path><svg:path fill="url(#tokenBrandedGg2)" d="m6 12.2l-3-1.61l8.98-5.09L21 10.59l-3 1.61l-6.005-3.35z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGg0" x1="12" x2="12" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F17750"></svg:stop><svg:stop offset=".36" stop-color="#E26891"></svg:stop><svg:stop offset=".65" stop-color="#D45AC7"></svg:stop><svg:stop offset="1" stop-color="#B071D9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGg1" x1="12" x2="12" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><svg:stop offset=".06" stop-color="#EF7C3B"></svg:stop><svg:stop offset=".39" stop-color="#EA6D75"></svg:stop><svg:stop offset="1" stop-color="#B961DC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGg2" x1="12" x2="12" y1="5.5" y2="12.2" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EEC985"></svg:stop><svg:stop offset=".38" stop-color="#FDBD4D"></svg:stop><svg:stop offset=".93" stop-color="#FCA143"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
