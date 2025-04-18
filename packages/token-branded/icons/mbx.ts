import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMbxIcon],svg[token-branded-mbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMbx0)" d="M3 18.75V5.25h3.594l5.322 5.186l5.326-5.186H21v13.5h-.338l-2.345-2.306l-4.039-3.74l.13-.113l3.78 3.498V7.8l-6.272 5.709l-6.103-5.71v8.291l3.78-3.498l.129.112l-6.525 6.047H3.05l-.023-.023zm8.364-4.573l.13.112l-4.815 4.461H6.43zm-.45-.405l.13.112l-5.248 4.866h-.254zm-.427-.383l.13.113l-5.665 5.248h-.253l5.793-5.36zm-.416-.37l.129.112l-6.064 5.619h-.253zm2.565 1.158l-.13.112l4.815 4.461h.248zm.45-.405l-.13.112l5.248 4.866h.253zm.427-.383l-.13.113l5.665 5.248h.253l-5.793-5.36zm.416-.37l-.129.112l6.064 5.619h.253z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMbx0" x1="3" x2="13.215" y1="6.263" y2="16.247" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4BABFF"></svg:stop><svg:stop offset=".89" stop-color="#9600FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMbxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
