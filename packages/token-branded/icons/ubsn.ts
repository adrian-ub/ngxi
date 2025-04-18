import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUbsnIcon],svg[token-branded-ubsn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="m13.875 14.625l-6-3.75v-1.5l6 3.75z" opacity=".8"></svg:path><svg:path fill="url(#tokenBrandedUbsn0)" d="M7.875 9.375H21v1.5H7.875z"></svg:path><svg:path fill="url(#tokenBrandedUbsn1)" d="M13.875 14.625H3v-1.5h10.875z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedUbsn0" x1="8.865" x2="20.52" y1="10.485" y2="10.485" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUbsn1" x1="13.054" x2="3.397" y1="13.515" y2="13.515" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedUbsnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
