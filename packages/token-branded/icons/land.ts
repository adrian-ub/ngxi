import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLandIcon],svg[token-branded-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLand0)" d="M6.163 8.717v6.664L12 18.776V21l-7.784-4.62V7.622z"></svg:path><svg:path fill="url(#tokenBrandedLand1)" d="M8.109 9.812v4.377l3.89 2.189V12z"></svg:path><svg:path fill="url(#tokenBrandedLand2)" d="M8.109 5.325L12.049 3l7.734 4.622L12 12L8.109 9.81z"></svg:path><svg:path fill="url(#tokenBrandedLand3)" d="M6.163 6.473L4.216 7.62l1.947 1.095z"></svg:path><svg:path fill="url(#tokenBrandedLand4)" d="M12.004 18.775L12.005 21l7.779-4.621V7.622L12.001 12l.002 4.377l5.835-3.404v2.432z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLand0" x1="4.746" x2="9.65" y1="8.391" y2="20.382" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5C93F7"></svg:stop><svg:stop offset="1" stop-color="#1159DF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLand1" x1="4.746" x2="9.65" y1="8.391" y2="20.382" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5C93F7"></svg:stop><svg:stop offset="1" stop-color="#1159DF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLand2" x1="12.005" x2="12.005" y1="3" y2="11.99" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6695FE"></svg:stop><svg:stop offset="1" stop-color="#0B57E0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLand3" x1="12.005" x2="12.005" y1="3" y2="11.99" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6695FE"></svg:stop><svg:stop offset="1" stop-color="#0B57E0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLand4" x1="18.908" x2="14.403" y1="7.914" y2="21.005" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#084BCE"></svg:stop><svg:stop offset="1" stop-color="#09166A"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
