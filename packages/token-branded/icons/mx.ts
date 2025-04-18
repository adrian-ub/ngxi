import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMxIcon],svg[token-branded-mx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1977F3" d="M7.2 7.406a2.113 2.113 0 0 1 3.7 0l5.814 10.28H5.2c-1.691 0-2.748-1.87-1.905-3.368z"></svg:path><svg:path fill="#002F81" d="M16.8 7.406a2.113 2.113 0 0 0-3.7 0l-4.123 7.296c-.753 1.327.185 2.985 1.682 2.985h8.14c1.691 0 2.748-1.872 1.904-3.369z"></svg:path><svg:path fill="url(#tokenBrandedMx0)" d="M10.659 17.686h6.055L12 9.348L8.971 14.7c-.748 1.327.19 2.985 1.687 2.985"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMx0" x1="9.029" x2="18.187" y1="15.981" y2="15.981" gradientUnits="userSpaceOnUse"><svg:stop offset=".12" stop-color="#1C6AD9"></svg:stop><svg:stop offset=".76" stop-color="#1C6AD9" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
