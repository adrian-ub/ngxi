import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRdntIcon],svg[token-branded-rdnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRdnt0)" d="M10.875 9.19L5.25 5.25l3.94 5.625L3 12l6.19 1.125l-3.94 5.065l5.625-3.38L12 21l1.125-6.19l5.905 3.38l-4.78-5.065L21 12l-6.75-1.125l4.5-5.625l-5.625 3.94L12 3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRdnt0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FA"></svg:stop><svg:stop offset="1" stop-color="#5A10F5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRdntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
