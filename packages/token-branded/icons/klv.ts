import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKlvIcon],svg[token-branded-klv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKlv0)" d="M21 20.678h-8.666L21 12.321z"></svg:path><svg:path fill="url(#tokenBrandedKlv1)" d="M21 20.678H3V3.321z"></svg:path><svg:path fill="#000" d="M21 20.678L16.665 16.5l1-.964z" opacity=".14"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKlv0" x1="12" x2="12" y1="3.241" y2="20.713" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF4681"></svg:stop><svg:stop offset="1" stop-color="#9B44F6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKlv1" x1="-1.288" x2="16.084" y1="7.865" y2="25.881" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF4681"></svg:stop><svg:stop offset=".739" stop-color="#9B44F6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKlvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
