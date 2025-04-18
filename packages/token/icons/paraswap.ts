import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenParaswapIcon],svg[token-paraswap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.997L12.75 4L3.5 19.997zM6.25 11.499L10.5 4H2zm11.972 6.38H7.278l5.472-9.464z"></svg:path>`,
})
export class TokenParaswapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
