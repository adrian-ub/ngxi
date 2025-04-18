import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLyraIcon],svg[token-branded-lyra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLyra0)" d="m15.884 9.979l-3.134 3.145H4.812c-.574 0-.861-.658-.473-1.052l8.872-8.929a.495.495 0 0 1 .794.135l2.21 4.923a1.59 1.59 0 0 1-.33 1.778"></svg:path><svg:path fill="url(#tokenBrandedLyra1)" d="M3 13.686c.18.242.827.563 1.947.563h12.321c.714 0 1.361.416 1.643 1.069l2.042 4.827a.62.62 0 0 1-.574.855H7.523a2.03 2.03 0 0 1-1.856-1.204z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLyra0" x1="12" x2="12" y1="2.994" y2="21.001" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5ADCD3"></svg:stop><svg:stop offset="1" stop-color="#37C4B1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLyra1" x1="18.838" x2="5.267" y1="15.025" y2="19.988" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#47D1C1"></svg:stop><svg:stop offset="1" stop-color="#21BFA1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLyraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
