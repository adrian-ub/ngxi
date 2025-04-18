import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKtcIcon],svg[token-branded-ktc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKtc0)" d="M3.321 3v2.571h2.572V3zm0 18V6.857h2.572v7.38L17.078 3h3.6zm8.036-5.722A776 776 0 0 1 17.078 21h3.6l-7.43-7.714z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKtc0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#53F3FF"></svg:stop><svg:stop offset="1" stop-color="#38CDEE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
