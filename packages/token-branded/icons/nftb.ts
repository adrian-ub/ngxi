import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNftbIcon],svg[token-branded-nftb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNftb0)" d="M17.4 19.8V21H6.6v-1.2zm0-16.8v15.6H6.6V3zm-1.2 1.2H7.8v13.2h8.4z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNftb0" x1="10.422" x2="17.826" y1="3.804" y2="13.08" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#18D3FD"></svg:stop><svg:stop offset="1" stop-color="#DE04FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNftbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
