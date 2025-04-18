import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedQuintIcon],svg[token-branded-quint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#12E3BC" d="M17.4 18v.6H21l-.528-.6z"></svg:path><svg:path fill="#14F4C8" d="M13.2 17.4V15H5.4V5.4H15V21h6v-2.4h-3.6V3H3v14.4z"></svg:path><svg:path fill="url(#tokenBrandedQuint0)" d="m6 14.4l-.6.6h7.8l-.6-.6z"></svg:path><svg:path fill="url(#tokenBrandedQuint1)" d="m6 6l-.6-.6H15l-.6.6z"></svg:path><svg:path fill="url(#tokenBrandedQuint2)" d="m15 5.4l-.6.6v14.4l.6.6z"></svg:path><svg:path fill="url(#tokenBrandedQuint3)" d="M9 8.1L5.4 5.4V15L9 12.3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedQuint0" x1="8.497" x2="6.322" y1="15.419" y2="7.557" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#068F82"></svg:stop><svg:stop offset="1" stop-color="#12E3BC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedQuint1" x1="8.524" x2="8.524" y1="-1.501" y2="6.959" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#068F82"></svg:stop><svg:stop offset="1" stop-color="#12E3BC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedQuint2" x1="23.88" x2="6.96" y1="8.669" y2="8.669" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#068F82"></svg:stop><svg:stop offset="1" stop-color="#12E3BC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedQuint3" x1="4.967" x2="9.185" y1="9.75" y2="9.75" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#068F82"></svg:stop><svg:stop offset="1" stop-color="#12E3BC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedQuintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
