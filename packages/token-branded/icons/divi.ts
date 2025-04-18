import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDiviIcon],svg[token-branded-divi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDivi0)" d="M12.858 3H3c1.254 2.91 2.892 4.2 4.926 4.2h4.698c1.878 0 3.99 2.376 3.99 4.8s-2.112 4.8-3.99 4.8H9v-5.364H4.686V21h8.172C16.848 21 21 18.066 21 12s-4.152-9-8.142-9"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDivi0" x1="19.801" x2="4.967" y1="6.054" y2="18.348" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EC1F55"></svg:stop><svg:stop offset="1" stop-color="#EC2928"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDiviIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
