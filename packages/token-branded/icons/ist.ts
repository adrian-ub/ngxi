import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIstIcon],svg[token-branded-ist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedIst0)" d="M16.95 7.81c0 2.656-2.214 4.811-4.95 4.811a5 5 0 0 1-2.443-.63l.823-1.093a3.7 3.7 0 0 0 1.62.369c1.99 0 3.6-1.548 3.6-3.46c0-1.909-1.61-3.457-3.6-3.457S8.4 5.898 8.4 7.806c0 .455.09.891.257 1.287l-1.112.815A4.7 4.7 0 0 1 7.05 7.81C7.05 5.156 9.264 3 12 3s4.95 2.156 4.95 4.81"></svg:path><svg:path fill="url(#tokenBrandedIst1)" d="M7.05 13.295c0-2.7 2.214-4.896 4.95-4.896c.923 0 1.791.252 2.53.689l-.847 1.066A3.5 3.5 0 0 0 12 9.75c-2.047 0-3.6 1.521-3.6 3.546v2.808c0 2.025 1.553 3.547 3.6 3.547s3.6-1.521 3.6-3.547v-2.808c0-.521-.045-.823-.243-1.273l1.116-.828c.306.639.477 1.35.477 2.101v2.808C16.95 18.808 14.736 21 12 21s-4.95-2.192-4.95-4.897z"></svg:path><svg:path fill="url(#tokenBrandedIst2)" d="M7.635 10.982a4.8 4.8 0 0 0-.585 2.313v2.809c0 1.134.387 2.173 1.04 3.001l1.008-.81a3.74 3.74 0 0 1-.698-2.192v-2.808c0-.558.117-1.084.333-1.557z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedIst0" x1="15.195" x2="4.446" y1="5.197" y2="11.153" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6B54FE"></svg:stop><svg:stop offset="1" stop-color="#FA81CF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedIst1" x1="14.169" x2="5.022" y1="4.581" y2="16.343" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BE7FFE"></svg:stop><svg:stop offset=".68" stop-color="#FDC142"></svg:stop><svg:stop offset="1" stop-color="#FE8D03"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedIst2" x1="8.072" x2="8.072" y1="11.338" y2="19.105" gradientUnits="userSpaceOnUse"><svg:stop offset=".07" stop-color="#E2A495"></svg:stop><svg:stop offset=".29" stop-color="#FE581B"></svg:stop><svg:stop offset=".51" stop-color="#FE5602"></svg:stop><svg:stop offset=".75" stop-color="#FE6502"></svg:stop><svg:stop offset=".91" stop-color="#FE9912"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedIstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
