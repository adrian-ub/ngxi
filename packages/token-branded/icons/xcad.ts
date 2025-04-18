import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXcadIcon],svg[token-branded-xcad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedXcad0)" d="M9.666 11.49L6.324 4.571h4.837l1.701 4.053h.043l3.112-4.053H21l-5.994 7.21l3.553 7.647h-5.003l-1.83-4.655h-.042L8.13 19.43H3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedXcad0" x1="11.999" x2="11.999" y1="19.429" y2="4.57" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#FD6422"></svg:stop><svg:stop offset=".26" stop-color="#FC194A"></svg:stop><svg:stop offset=".605" stop-color="#FC125F"></svg:stop><svg:stop offset="1" stop-color="#9B2AA6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedXcadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
