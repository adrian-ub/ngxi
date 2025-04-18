import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedThetaIcon],svg[token-branded-theta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTheta0)" fill-rule="evenodd" d="M16.737 3.947H7.263v16.106h9.474zm-10.421 0v16.106l.947.947h9.474l.947-.947V3.947L16.737 3H7.263z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedTheta1)" d="M11.527 9.628H9.158v.948h5.684v-.948h-2.368V6.786h-.947zm0 4.737H9.158v-.947h5.684v.947h-2.368v2.842h-.947z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTheta0" x1="4.825" x2="19.536" y1="4.355" y2="19.844" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2AB8E6"></svg:stop><svg:stop offset=".53" stop-color="#29CAD2"></svg:stop><svg:stop offset="1" stop-color="#2EE4BE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedTheta1" x1="8.413" x2="16.902" y1="7.571" y2="15.291" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2AB8E6"></svg:stop><svg:stop offset=".53" stop-color="#29CAD2"></svg:stop><svg:stop offset="1" stop-color="#2EE4BE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedThetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
