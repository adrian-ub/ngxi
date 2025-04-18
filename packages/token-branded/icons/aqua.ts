import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAquaIcon],svg[token-branded-aqua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAqua0)" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAqua0" x1="7.219" x2="16.5" y1="4.969" y2="19.313" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#55B6FF"></svg:stop><svg:stop offset=".2" stop-color="#4377EC"></svg:stop><svg:stop offset=".43" stop-color="#2B2CAE"></svg:stop><svg:stop offset="1" stop-color="#1F123E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAquaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
