import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDfynIcon],svg[token-branded-dfyn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDfyn0)" d="M10.55 13.286H5.314L7.886 3h4.145c2.077 0 3.461 1.882 3.625 3.62c.129 1.39-.54 3.328-.89 4.094h3.92L8.642 21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDfyn0" x1="17.205" x2="4.754" y1="6.729" y2="13.961" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B8566F"></svg:stop><svg:stop offset="1" stop-color="#60B9E2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDfynIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
