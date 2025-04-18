import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLithIcon],svg[token-branded-lith-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M6.536 10.072a3.536 3.536 0 1 0 0-7.072a3.536 3.536 0 0 0 0 7.072"></svg:path><svg:path fill="#E96036" d="M17.464 10.072a3.536 3.536 0 1 0 0-7.072a3.536 3.536 0 0 0 0 7.072"></svg:path><svg:path fill="#000" d="M6.536 21a3.536 3.536 0 1 0 0-7.071a3.536 3.536 0 0 0 0 7.071m10.928 0a3.536 3.536 0 1 0 0-7.071a3.536 3.536 0 0 0 0 7.071"></svg:path></svg:g>`,
})
export class TokenBrandedLithIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
