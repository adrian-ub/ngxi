import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWalletIcon],svg[token-branded-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedWallet0)" d="m17.85 14.7l-2.7-2.926l-4.05 3.375V21z"></svg:path><svg:path fill="url(#tokenBrandedWallet1)" d="M10.2 10.65L8.85 8.625l-2.475 2.25l.9 1.575l2.475-.9z"></svg:path><svg:path fill="url(#tokenBrandedWallet2)" d="M11.55 7.95V3l2.7 6.3z"></svg:path><svg:path fill="url(#tokenBrandedWallet3)" d="m14.25 9.3l-2.7-1.35l-5.4 7.425l3.6 3.825z"></svg:path><svg:path fill="url(#tokenBrandedWallet4)" d="M15.15 11.775V9.75l2.7 4.95z"></svg:path><svg:path fill="url(#tokenBrandedWallet5)" d="m8.85 8.625l.9-3.375l-3.375 5.625z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedWallet0" x1="18.396" x2="6.836" y1="9.084" y2="10.524" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5C02FF"></svg:stop><svg:stop offset=".79" stop-color="#5402DB"></svg:stop><svg:stop offset="1" stop-color="#35077D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWallet1" x1="16.102" x2="6.213" y1="11.322" y2="12.584" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#35028B"></svg:stop><svg:stop offset=".31" stop-color="#5704E7"></svg:stop><svg:stop offset="1" stop-color="#4101BA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWallet2" x1="6.403" x2="10.677" y1="3" y2="22.951" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7412FD"></svg:stop><svg:stop offset="1" stop-color="#9A39FC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWallet3" x1="15.282" x2="9.071" y1="3.31" y2="20.364" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6001FF"></svg:stop><svg:stop offset="1" stop-color="#7E1FFF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWallet4" x1="6.891" x2="14.318" y1="5.34" y2="21.529" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7D2BD8"></svg:stop><svg:stop offset="1" stop-color="#A35CEA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWallet5" x1="9.943" x2="6.388" y1="5.569" y2="10.659" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7416F0"></svg:stop><svg:stop offset="1" stop-color="#9A43FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
