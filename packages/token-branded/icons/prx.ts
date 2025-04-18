import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPrxIcon],svg[token-branded-prx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPrx0)" d="M19.714 8.08L4.388 3.097l6.712 9.432z"></svg:path><svg:path fill="url(#tokenBrandedPrx1)" d="M7.475 14.854L4.286 21l8.949-5.945L4.286 3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPrx0" x1="6.003" x2="11.42" y1="4.444" y2="14.328" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F504CB"></svg:stop><svg:stop offset="1" stop-color="#3F2EA0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPrx1" x1="5.229" x2="15.668" y1="5.571" y2="11.399" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F504CB"></svg:stop><svg:stop offset="1" stop-color="#3F2EA0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPrxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
