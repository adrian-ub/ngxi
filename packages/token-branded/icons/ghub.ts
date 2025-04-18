import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGhubIcon],svg[token-branded-ghub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C6E9F4" d="M10.03 3.794L7.5 5.435l9-1.096z"></svg:path><svg:path fill="#42C6EA" d="m14.25 8.992l-2.812-.82L16.5 4.339z"></svg:path><svg:path fill="#42AADB" d="m11.439 8.173l-3.94-2.737L3 14.186z"></svg:path><svg:path fill="#2A4D9B" d="M13.97 9.813L3 14.186h10.122z"></svg:path><svg:path fill="#1B6DB7" d="m13.127 14.186l1.403-4.648L21 12l-7.878 2.186z"></svg:path><svg:path fill="#2589C9" d="m21 12l-4.5-7.661l-1.689 4.653z"></svg:path><svg:path fill="#243E81" d="m12 20.206l1.127-6.02L20.999 12z"></svg:path><svg:path fill="#1D1F50" d="M13.122 14.187H3l9 6.019z"></svg:path><svg:path fill="#1996CE" d="m13.97 9.262l-2.531-1.09L3 14.186z"></svg:path><svg:path fill="#7CD1EC" d="M11.439 8.172L7.5 5.435l9-1.096z"></svg:path></svg:g>`,
})
export class TokenBrandedGhubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
