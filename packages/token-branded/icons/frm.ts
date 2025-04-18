import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFrmIcon],svg[token-branded-frm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFrm0)" d="m4.323 16.24l.794.461l.794-.466v-3.44L17.76 6.202l-1.588-1.07l-10.26 5.522V8.432l8.671-4.363L12.995 3L4.323 7.394z"></svg:path><svg:path fill="url(#tokenBrandedFrm1)" d="m16.5 8.198l-9 5.082v2.41l9-5.348z"></svg:path><svg:path fill="#CCA362" d="m8.56 18.899l-1.589-1.07l9.53-5.882v2.145l-7.942 4.817z"></svg:path><svg:path fill="#CCA362" d="m18.882 7.13l.794.508v8.587L11.63 21l-1.588-1.07l8.047-4.775V7.66l.794-.535z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFrm0" x1="3.537" x2="18.864" y1="16.055" y2="7.509" gradientUnits="userSpaceOnUse"><svg:stop offset=".05" stop-color="#C5C3C5"></svg:stop><svg:stop offset=".3" stop-color="#F2F2F2"></svg:stop><svg:stop offset=".9" stop-color="#BEBBBE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedFrm1" x1="2.029" x2="25.758" y1="18.379" y2="10.902" gradientUnits="userSpaceOnUse"><svg:stop offset=".2" stop-color="#CAA467"></svg:stop><svg:stop offset=".62" stop-color="#ECC77C"></svg:stop><svg:stop offset=".92" stop-color="#CCA362"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFrmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
