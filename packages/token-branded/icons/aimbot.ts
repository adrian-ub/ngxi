import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAimbotIcon],svg[token-branded-aimbot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAimbot0)" d="m7.95 11.843l4.032 1.957L16.05 12l-4.068-1.8"></svg:path><svg:path fill="url(#tokenBrandedAimbot1)" d="m7.95 11.843l4.032 1.957v-3.6z"></svg:path><svg:path fill="url(#tokenBrandedAimbot2)" d="M18.782 7.5H5.218L3 10.052v3.896L5.218 16.5h13.564L21 13.948v-3.896zm.112 6.03s-.729 1.17-1.107 1.17H6.213c-.378 0-1.107-1.17-1.107-1.17s-.077-.778-.077-1.521s.077-1.521.077-1.521L6.213 9.3h11.574l1.107 1.188s.077.779.077 1.52c0 .744-.077 1.522-.077 1.522"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAimbot0" x1="1075.02" x2="923.259" y1="380.606" y2="635.94" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#8F9196"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAimbot1" x1="5959.19" x2="8216.67" y1="610.138" y2="7705.73" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAimbot2" x1="36153.6" x2="36153.6" y1="609.778" y2="37794.1" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAimbotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
