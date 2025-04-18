import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEqxIcon],svg[token-branded-eqx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEqx0)" d="M3 21V3h18v2.571H5.571V18.43h10.286V21zm15.429-10.928H7.5V7.5H21V21h-2.572v-5.786H7.5v-2.571h10.929z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEqx0" x1="4.607" x2="17.947" y1="6.214" y2="18.428" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#112650"></svg:stop><svg:stop offset="1" stop-color="#38A28B"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEqxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
