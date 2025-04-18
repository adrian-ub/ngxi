import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLif3Icon],svg[token-branded-lif3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLif30)" d="M10.403 4.648A1.705 1.705 0 0 1 12 3.563c.709 0 1.35.433 1.598 1.085l5.377 13.54H21v2.25h-3.937L12 6.938l-5.063 13.5H3v-2.25h2.025z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLif30" x1="6.375" x2="16.886" y1="5.069" y2="19.439" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#749FC1"></svg:stop><svg:stop offset=".49" stop-color="#294874"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLif3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
