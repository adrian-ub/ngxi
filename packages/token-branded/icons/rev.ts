import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRevIcon],svg[token-branded-rev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRev0)" d="m9.29 3l8.165 4.636v3.818l-3.71 1.997L18 16.636V21l-7.636-5.727v-3.818l3.72-2.002l-4.795-2.706v11.526L6 21V4.636L9.284 3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRev0" x1="5.25" x2="22.79" y1="2.196" y2="13.693" gradientUnits="userSpaceOnUse"><svg:stop offset=".06" stop-color="#1A1C3C"></svg:stop><svg:stop offset="1" stop-color="#720044"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
