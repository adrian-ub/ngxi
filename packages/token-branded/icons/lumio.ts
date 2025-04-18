import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLumioIcon],svg[token-branded-lumio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLumio0)" d="m3 3.9l15.873 5.951v4.298L3 20.1z"></svg:path><svg:path fill="url(#tokenBrandedLumio1)" d="m3 7.206l15.873 2.645v4.298L3 16.794z"></svg:path><svg:path fill="#fff" d="M18.873 14.149A2.14 2.14 0 0 0 21 12a2.14 2.14 0 0 0-2.127-2.149A2.14 2.14 0 0 0 16.746 12c0 1.187.952 2.149 2.127 2.149"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLumio0" x1="4.964" x2="19.036" y1="12.165" y2="12.277" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8D29C1" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#8D29C1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLumio1" x1="3" x2="19.036" y1="12.165" y2="12.165" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F03F79" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#F03F79"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLumioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
