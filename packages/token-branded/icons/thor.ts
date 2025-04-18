import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedThorIcon],svg[token-branded-thor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedThor0)" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 8.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94"></svg:path><svg:path fill="url(#tokenBrandedThor1)" d="m10.285 8.83l1.948 1.884l4.326-4.606l-6.274 2.716zm7.232-3.712l.307.413l-5.575 5.94l-2.895-2.806z"></svg:path><svg:path fill="url(#tokenBrandedThor2)" d="m14.276 14.15l-1.996-1.912l-5.183 5.38zm-8.1 4.468l-.297-.424l6.385-6.723l2.912 2.848z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedThor0" x1="18.088" x2="6.706" y1="5.118" y2="18.618" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#37FAF9"></svg:stop><svg:stop offset="1" stop-color="#08ACFC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedThor1" x1="20.011" x2="3.772" y1="3.676" y2="13.615" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3EFFFA"></svg:stop><svg:stop offset="1" stop-color="#29E0EE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedThor2" x1="7.31" x2="13.636" y1="17.829" y2="12.91" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14AAFE"></svg:stop><svg:stop offset="1" stop-color="#1CD2F1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedThorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
