import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCopeIcon],svg[token-branded-cope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCope0)" d="M3 12a1.8 1.8 0 1 1 3.6 0A1.8 1.8 0 0 1 3 12m7.2 0a1.8 1.8 0 1 1 3.6 0a1.8 1.8 0 0 1-3.6 0m9-1.8a1.8 1.8 0 1 0 0 3.599a1.8 1.8 0 0 0 0-3.599"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCope0" x1="19.2" x2="19.2" y1="10.2" y2="13.8" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B8B8B8"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
