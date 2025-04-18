import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSclpIcon],svg[token-branded-sclp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSclp0)" d="m15.674 4.077l-4.288 4.409a.3.3 0 0 0-.042.037L8.23 11.635a.77.77 0 0 0 0 1.09l2.948 2.95l-3.63 3.81a11 11 0 0 1-1.631-1.37C2.112 14.318 1.98 9.618 5.812 5.78c3.038-3.038 6.622-3.552 9.862-1.704"></svg:path><svg:path fill="url(#tokenBrandedSclp1)" d="M18.225 18.187c-3.028 3.023-6.59 3.568-9.809 1.827l1.281-1.334l2.933-3.033l2.916-2.917a.78.78 0 0 0 0-1.09l-2.927-2.928l3.594-3.758l.318-.328c.529.37 1.058.82 1.561 1.323c3.774 3.764 3.933 8.433.133 12.238"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSclp0" x1="17.767" x2="-4.099" y1="-3.604" y2="58.547" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00DECA"></svg:stop><svg:stop offset=".38" stop-color="#3A8AFA"></svg:stop><svg:stop offset="1" stop-color="#1A6AF4"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSclp1" x1="18.744" x2="-5.314" y1="-1.382" y2="51.148" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00DECA"></svg:stop><svg:stop offset=".38" stop-color="#3A8AFA"></svg:stop><svg:stop offset="1" stop-color="#1A6AF4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSclpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
