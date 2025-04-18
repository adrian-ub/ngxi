import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAvtIcon],svg[token-branded-avt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAvt0)" d="m15.224 15.94l5.082 2.414H3.98l11.25-2.414z"></svg:path><svg:path fill="url(#tokenBrandedAvt1)" d="M10.936 3v4.214l-7.671 9.578z"></svg:path><svg:path fill="#5100FF" d="m20.736 7.642l-6.883 3.22L7.098 21z"></svg:path><svg:path fill="#1D2733" d="m10.935 3l9.344 15.343l-5.183-2.404l-4.16-8.725z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAvt0" x1="5.683" x2="19.557" y1="20.29" y2="20.29" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F2F1F1"></svg:stop><svg:stop offset="1" stop-color="#1D2733"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAvt1" x1="5.688" x2="19.554" y1="21.001" y2="21.001" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F2F1F1"></svg:stop><svg:stop offset="1" stop-color="#1D2733"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAvtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
