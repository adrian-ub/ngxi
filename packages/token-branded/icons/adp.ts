import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAdpIcon],svg[token-branded-adp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAdp0)" d="M13.052 3.248a1.193 1.193 0 0 0-2.1 0L2.14 20.098c-.131.243-.163.5-.125.73c2.93.838 7.65.47 9.987-3.956c2.062-3.918 3.275-6.074 4.031-7.43l.137-.238l-3.118-5.95z"></svg:path><svg:path fill="url(#tokenBrandedAdp1)" d="m16.42 9.685l-3.825 7.187a6.78 6.78 0 0 0 6.656 4.5c1.156 0 2.05-.206 2.725-.5c.05-.25.025-.518-.106-.775z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAdp0" x1="6.561" x2="17.432" y1="3.527" y2="20.27" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3E64DF"></svg:stop><svg:stop offset="1" stop-color="#4587F1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAdp1" x1="6.56" x2="17.431" y1="3.527" y2="20.27" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3E64DF"></svg:stop><svg:stop offset="1" stop-color="#4587F1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAdpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
