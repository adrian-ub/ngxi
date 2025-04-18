import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIxtIcon],svg[token-branded-ixt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#245771" d="M3 7h2.5v2.5H3zm0 3.5h2.5V17H3zM16.746 7H21l-5.074 4.979L21 17h-4.254L11.5 11.98z"></svg:path><svg:path fill="#fff" d="M10.754 7H6.5l5.074 4.979L6.5 17h4.254L16 11.98z"></svg:path></svg:g>`,
})
export class TokenBrandedIxtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
