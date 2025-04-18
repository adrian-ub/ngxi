import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCloverIcon],svg[token-branded-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedClover0)" d="M16.68 3H7.32A4.32 4.32 0 0 0 3 7.32v9.36A4.32 4.32 0 0 0 7.32 21h9.36A4.32 4.32 0 0 0 21 16.68V7.32A4.32 4.32 0 0 0 16.68 3"></svg:path><svg:path fill="#0C0B0B" fill-rule="evenodd" d="M12 17.76a5.76 5.76 0 1 0 0-11.52a5.76 5.76 0 0 0 0 11.52m-1.017-8.51a.3.3 0 0 1 .3-.3h1.433a.3.3 0 0 1 .3.3v1.755h-2.033v1.99h2.033v1.754a.3.3 0 0 1-.3.3h-1.433a.3.3 0 0 1-.3-.3v-1.69H9.25a.3.3 0 0 1-.3-.3v-1.454a.3.3 0 0 1 .3-.3h1.733zm2.033 1.755h1.734a.3.3 0 0 1 .3.3v1.454a.3.3 0 0 1-.3.3h-1.733z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedClover0" x1="4.498" x2="20.232" y1="19.5" y2="4.125" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BDFDE2"></svg:stop><svg:stop offset="1" stop-color="#9BDAF6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCloverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
