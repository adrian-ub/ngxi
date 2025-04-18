import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRuneIcon],svg[token-branded-rune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRune0)" d="m4.125 21l12.612-5.292l-3.99-4.033zM8.757 7.647l3.99 4.028L19.876 3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRune0" x1="19.875" x2="4.125" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3F9"></svg:stop><svg:stop offset="1" stop-color="#0CF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
