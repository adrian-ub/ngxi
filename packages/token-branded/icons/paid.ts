import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPaidIcon],svg[token-branded-paid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPaid0)" d="M13.8 9.002v1.2l-.006.192l.426 2.04a3.58 3.58 0 0 0 .78-2.232v-1.2a3.6 3.6 0 0 0-3.6-3.6H6.6a3.6 3.6 0 0 0-3.6 3.6v1.2a3.6 3.6 0 0 0 1.8 3.12v-1.53c-.372-.42-.6-.984-.6-1.59v-1.2a2.4 2.4 0 0 1 2.4-2.4h4.8a2.4 2.4 0 0 1 2.4 2.4"></svg:path><svg:path fill="url(#tokenBrandedPaid1)" d="M13.2 4.2h1.2a2.4 2.4 0 0 1 2.4 2.4v4.8a2.4 2.4 0 0 1-2.4 2.4h-1.2a2.4 2.4 0 0 1-2.4-2.4H9.6a3.6 3.6 0 0 0 3.6 3.6h1.2a3.6 3.6 0 0 0 3.6-3.6V6.6A3.6 3.6 0 0 0 14.4 3h-1.2a3.6 3.6 0 0 0-3.12 1.8h1.53c.42-.372.984-.6 1.59-.6"></svg:path><svg:path fill="url(#tokenBrandedPaid2)" d="M9 10.2h1.2a2.4 2.4 0 0 1 2.4 2.4v.6h1.2v-.6A3.6 3.6 0 0 0 10.2 9H9a3.6 3.6 0 0 0-3.6 3.6v4.8A3.6 3.6 0 0 0 9 21h1.2a3.6 3.6 0 0 0 3.395-2.4h-1.32a2.4 2.4 0 0 1-2.076 1.2H9a2.4 2.4 0 0 1-2.4-2.4v-4.8A2.4 2.4 0 0 1 9 10.2"></svg:path><svg:path fill="url(#tokenBrandedPaid3)" d="M19.2 11.611c.372.42.6.984.6 1.59v1.2a2.4 2.4 0 0 1-2.4 2.4h-4.8a2.4 2.4 0 0 1-2.4-2.4v-.24l-1.2-.96v1.2a3.6 3.6 0 0 0 3.6 3.6h4.8a3.6 3.6 0 0 0 3.6-3.6v-1.2a3.6 3.6 0 0 0-1.8-3.12z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPaid0" x1="11.465" x2="16.026" y1="11.426" y2="18.817" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#074C7D"></svg:stop><svg:stop offset="1" stop-color="#5D0B5D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPaid1" x1="11.465" x2="16.026" y1="11.423" y2="18.814" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#074C7D"></svg:stop><svg:stop offset="1" stop-color="#5D0B5D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPaid2" x1="11.464" x2="16.025" y1="11.424" y2="18.814" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#074C7D"></svg:stop><svg:stop offset="1" stop-color="#5D0B5D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPaid3" x1="11.465" x2="16.026" y1="11.425" y2="18.815" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#074C7D"></svg:stop><svg:stop offset="1" stop-color="#5D0B5D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPaidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
