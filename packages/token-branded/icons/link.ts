import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLinkIcon],svg[token-branded-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2E61DE" d="m12 3l7.234 4.333V16.1L10.967 21v-1.235L4.784 16.07l-.017-8.685zm.01 14.98l5.157-3.054v-6.42l-5.166-3.092l-5.167 3.132v6.35z"></svg:path>`,
})
export class TokenBrandedLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
