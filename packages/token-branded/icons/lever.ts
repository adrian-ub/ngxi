import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLeverIcon],svg[token-branded-lever-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M12.056 4.125L3 19.875h6.998l8.831-15.75z"></svg:path><svg:path fill="#B0B5BF" d="M18.823 4.125L3 19.875h6.998l8.831-15.75z"></svg:path><svg:path fill="#5AA800" d="M12.151 19.875H21L16.584 12z"></svg:path><svg:path fill="#7FDF00" d="M17.513 19.875H21L16.584 12z"></svg:path></svg:g>`,
})
export class TokenBrandedLeverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
