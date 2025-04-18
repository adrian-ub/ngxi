import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPbxIcon],svg[token-branded-pbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPbx0)" d="M13.944 15.792H3.584V7.997C3.584 5.235 5.848 3 8.645 3h5.3c3.569.006 6.471 2.867 6.471 6.396s-2.902 6.396-6.472 6.396"></svg:path><svg:path fill="url(#tokenBrandedPbx1)" d="M8.761 8.119c-3.169-1.567-3.424-3.134-3.146-4.12a4.97 4.97 0 0 0-2.031 4.004v7.934h10.36c1.527 0 2.926-.673 4.023-1.538c-.54-3.784-4.876-4.144-9.206-6.28"></svg:path><svg:path fill="url(#tokenBrandedPbx2)" d="M3.584 9.751v8.364c0 2.136 2.177 3.53 4.028 2.583l.61-.313c3.018-1.567 2.704-6.124-.494-7.232c-2.292-.778-4.144-1.3-4.144-3.402"></svg:path><svg:path fill="url(#tokenBrandedPbx3)" d="M9.423 3.005c.754.83 2.356 1.88 5.815 2.554a13.6 13.6 0 0 1 4.905 2.008a6.47 6.47 0 0 0-6.199-4.562z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPbx0" x1="11.24" x2="16.614" y1="12.677" y2="8.187" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0080EE"></svg:stop><svg:stop offset="1" stop-color="#01C5F6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPbx1" x1="9.439" x2="14.077" y1="17.35" y2="12.303" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#725BFF"></svg:stop><svg:stop offset="1" stop-color="#9665FB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPbx2" x1="7.793" x2="11.087" y1="20.991" y2="8.304" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3C31D6"></svg:stop><svg:stop offset=".98" stop-color="#2880FA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPbx3" x1="16.87" x2="15.488" y1="4.067" y2="5.965" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00E5CC"></svg:stop><svg:stop offset=".94" stop-color="#10DCC6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPbxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
