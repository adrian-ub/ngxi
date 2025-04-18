import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLakeIcon],svg[token-branded-lake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M21 3H3v18h18z"></svg:path><svg:path fill="#1F1F1F" d="M3 3h18v18H3z"></svg:path><svg:path fill="#fff" d="M8.465 15.214v1.606a4.82 4.82 0 1 0 0-9.642v1.607a3.2 3.2 0 0 1 3.214 3.214a3.2 3.2 0 0 1-3.214 3.214"></svg:path><svg:path fill="#BDBEC0" d="M13.286 12H11.68a4.83 4.83 0 0 0 4.822 4.821v-1.607A3.203 3.203 0 0 1 13.286 12"></svg:path></svg:g>`,
})
export class TokenBrandedLakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
