import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBeamIcon],svg[token-branded-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0B76FF" d="M12 16.05h3.735L12 9.75V5.7l7.65 12.6H12z"></svg:path><svg:path fill="#24C1FF" d="M12 16.05H8.247L12 9.75V5.7L4.35 18.3H12z"></svg:path><svg:path fill="#39FFF2" d="M12 11.55v3.6H9.75z"></svg:path><svg:path fill="#00E2C2" d="M12 11.55v3.6h2.25z"></svg:path><svg:path fill="url(#tokenBrandedBeam0)" d="m3 9.643l8.99 4.158v.436L3 12.271z"></svg:path><svg:path fill="url(#tokenBrandedBeam1)" d="m21 8.432l-9.009 5.373v.148l9.01-3.784z"></svg:path><svg:path fill="url(#tokenBrandedBeam2)" d="m21 13.639l-9.009.603v-.144l9.01-2.196z"></svg:path><svg:path fill="url(#tokenBrandedBeam3)" d="m21 10.168l-9.009 3.78v.149l9.01-2.196z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBeam0" x1="3.009" x2="12.865" y1="12.032" y2="12.032" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBeam1" x1="20.892" x2="9.447" y1="11.974" y2="11.974" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FD76FD" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF51FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBeam2" x1="21.081" x2="11.811" y1="12.025" y2="12.025" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9D6EFF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#A18CFF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBeam3" x1="20.991" x2="15.69" y1="12.139" y2="12.139" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AE60D6" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#AB38E6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBeamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
