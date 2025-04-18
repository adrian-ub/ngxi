import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCpoolIcon],svg[token-branded-cpool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCpool0)" d="M13.43 3a9 9 0 0 0 0 18z"></svg:path><svg:path fill="#fff" d="M13.687 7.885a4.114 4.114 0 1 0 3.62 6.069l2.263 1.234a6.686 6.686 0 1 1 0-6.377l-2.263 1.234a4.11 4.11 0 0 0-3.62-2.16"></svg:path><svg:path fill="url(#tokenBrandedCpool1)" d="M13.43 3a9 9 0 0 0 0 18z" opacity=".5"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCpool0" x1="13.43" x2="11.63" y1="3.509" y2="20.234" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#23B77F"></svg:stop><svg:stop offset=".44" stop-color="#2857B3"></svg:stop><svg:stop offset=".65" stop-color="#396CC6"></svg:stop><svg:stop offset=".82" stop-color="#5AA3EA"></svg:stop><svg:stop offset="1" stop-color="#92F5EA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCpool1" x1="13.43" x2="11.63" y1="3.509" y2="20.234" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#23B77F"></svg:stop><svg:stop offset=".44" stop-color="#2857B3"></svg:stop><svg:stop offset=".65" stop-color="#396CC6"></svg:stop><svg:stop offset=".82" stop-color="#5AA3EA"></svg:stop><svg:stop offset="1" stop-color="#92F5EA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCpoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
