import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenParaSwapIcon],svg[token-para-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19.199L12.675 4.801L4.35 19.199zM6.825 11.55l3.825-6.749H3zM17.6 17.293H7.75l4.925-8.518z"></svg:path>`,
})
export class TokenParaSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
