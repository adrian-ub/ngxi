import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenZetaChainIcon],svg[token-zeta-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.958 15.917v2.393H7.086c.137-1.575.645-2.683 2.402-4.241l7.47-6.373v5.592h2.69V3H4.355v5.128h2.688V5.69h8.123l-7.433 6.343l-.018.017c-3.115 2.758-3.363 4.984-3.363 7.607V21h15.293v-5.082h-2.689z"></svg:path>`,
})
export class TokenZetaChainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
