import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedParaswapIcon],svg[token-branded-paraswap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2669F5" d="M22 20L12.75 4L3.5 20zM6.25 11.5L10.5 4H2zm11.972 6.382H7.278l5.472-9.466z"></svg:path>`,
})
export class TokenBrandedParaswapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
