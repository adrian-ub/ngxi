import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedParaSwapIcon],svg[token-branded-para-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2669F5" d="M21 19.2L12.675 4.8L4.35 19.2zM6.825 11.55L10.65 4.8H3zM17.6 17.294H7.75l4.925-8.52z"></svg:path>`,
})
export class TokenBrandedParaSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
