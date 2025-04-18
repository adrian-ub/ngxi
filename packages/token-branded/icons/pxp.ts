import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPxpIcon],svg[token-branded-pxp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPxp0)" d="M13.125 3h-2.25v1.687H5.813v2.25h1.124V18.75H5.812V21h4.5v-2.25H9.187v-3.937h1.688V16.5h2.25v-1.687c2.801-.023 5.062-2.296 5.062-5.063a5.09 5.09 0 0 0-5.062-5.063zm-3.938 9.563V6.937h3.91a2.824 2.824 0 0 1 2.84 2.813c0 1.553-1.27 2.813-2.84 2.813z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPxp0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5BC5F7"></svg:stop><svg:stop offset="1" stop-color="#057EFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPxpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
