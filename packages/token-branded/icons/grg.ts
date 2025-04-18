import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGrgIcon],svg[token-branded-grg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#054186" d="M12.75 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path fill="#FFAE00" d="m10.25 10l1-7l-8 8z"></svg:path><svg:path fill="#FFCA57" d="m10.25 10.001l-7 1l13 5z"></svg:path><svg:path fill="#fff" d="m11.25 3l-1 7l6 6z"></svg:path></svg:g>`,
})
export class TokenBrandedGrgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
