import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStimaIcon],svg[token-branded-stima-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedStima0)" d="M11.57 3.113a.88.88 0 0 1 .86 0l7.142 4.076c.265.15.43.43.43.735v8.152a.85.85 0 0 1-.43.735l-7.142 4.076a.88.88 0 0 1-.86 0l-7.142-4.076a.85.85 0 0 1-.43-.735V7.924c0-.3.165-.585.43-.735z"></svg:path><svg:path fill="url(#tokenBrandedStima1)" d="M12.02 12L4.998 8l7.022-4.001l6.982 4z"></svg:path><svg:path fill="url(#tokenBrandedStima2)" d="m12 11.976l-.006 8.027l-6.986-4.026L4.998 8z"></svg:path><svg:path fill="url(#tokenBrandedStima3)" d="m12 11.976l.005 8.027l6.986-4.026l.01-7.977z"></svg:path><svg:path fill="url(#tokenBrandedStima4)" d="M4.758 10.564L12.16 14.7c.265.15.355.48.2.74a.55.55 0 0 1-.75.2l-7.402-4.136z"></svg:path><svg:path fill="url(#tokenBrandedStima5)" d="M19.127 13.536L11.7 9.28a.537.537 0 0 1-.2-.745a.55.55 0 0 1 .745-.2l7.437 4.266l-.55.935z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedStima0" x1="3.998" x2="20.897" y1="15.896" y2="7.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EBECF3"></svg:stop><svg:stop offset="1" stop-color="#ACB2C6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStima1" x1="3.591" x2="19.493" y1="11.798" y2="11.775" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DD79B2"></svg:stop><svg:stop offset=".5" stop-color="#D4399B"></svg:stop><svg:stop offset="1" stop-color="#B94299"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStima2" x1="4.798" x2="17.175" y1="15.203" y2="4.715" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DD79B2"></svg:stop><svg:stop offset=".5" stop-color="#D4399B"></svg:stop><svg:stop offset="1" stop-color="#B94299"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStima3" x1="4.512" x2="16.967" y1="7.973" y2="19.32" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A7036C"></svg:stop><svg:stop offset="1" stop-color="#8C136D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStima4" x1="3.997" x2="22.217" y1="2.999" y2="9.138" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E5E7EF"></svg:stop><svg:stop offset="1" stop-color="#ACB2C6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStima5" x1="19.518" x2="11.601" y1="10.75" y2="9.84" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B7BDCE"></svg:stop><svg:stop offset="1" stop-color="#D0D3E1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedStimaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
