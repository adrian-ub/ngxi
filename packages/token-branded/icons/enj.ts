import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEnjIcon],svg[token-branded-enj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEnj0)" d="M19.06 16.8h-8.122c-1.9-.004-3.193-1.354-3.955-3h12.25C20.237 13.8 21 12.974 21 12s-.763-1.8-1.767-1.8H6.818c.6-1.636 2.312-3.002 4.12-3h8.121c1.003 0 1.767-.767 1.767-1.732c0-.974-.774-1.868-1.767-1.868h-8.121C6.552 3.6 3 7.374 3 12v.252c.064 2.18.928 4.25 2.41 5.771c1.48 1.52 3.463 2.373 5.528 2.377h8.121c1.004 0 1.767-.894 1.767-1.868s-.763-1.732-1.767-1.732"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEnj0" x1="20.175" x2="7.449" y1="16.331" y2="4.499" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9468FF"></svg:stop><svg:stop offset="1" stop-color="#ADF8FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEnjIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
