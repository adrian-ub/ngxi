import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVabIcon],svg[token-branded-vab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedVab0)" d="M13.233 19.463a1.006 1.006 0 0 1-1.71 0L3.134 5.49c-.381-.635.095-1.429.858-1.429h15.026c1.535 0 2.482 1.604 1.704 2.869l-1.826 2.98c-.709 1.159-1.932 1.561-3.334 1.561H9.85a.52.52 0 0 0-.498.53c.01.317.265.529.498.529h4.144a1.927 1.927 0 0 1 1.64 2.927z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedVab0" x1="5.384" x2="12.518" y1="5.914" y2="19.151" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#470180"></svg:stop><svg:stop offset=".82" stop-color="#EF62C9"></svg:stop><svg:stop offset="1" stop-color="#FFCCF7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedVabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
