import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZecIcon],svg[token-branded-zec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ECB244" d="M11.19 15.316h5.547v3.316H13.42V21h-2.844v-2.368H7.263v-3.01l5.521-6.938h-5.52V5.368h3.313V3h2.844v2.368h3.316v3.01z"></svg:path>`,
})
export class TokenBrandedZecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
