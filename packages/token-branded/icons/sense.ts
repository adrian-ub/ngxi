import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSenseIcon],svg[token-branded-sense-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M17.21 3H6.79v18h10.42z"></svg:path><svg:path fill="#A367FF" d="M11.235 15L9.87 21l3.552-3z"></svg:path><svg:path fill="#8766F0" d="m13.421 17.998l3.79-3.25l-5.976.25z"></svg:path><svg:path fill="#53539A" d="m17.21 14.749l-4.262-5.75l-1.713 6z"></svg:path><svg:path fill="#6487E7" d="m6.79 9.499l4.445 5.5l1.712-6z"></svg:path><svg:path fill="#45C8FE" d="m12.947 9l1.42-6l-3.789 3.25z"></svg:path><svg:path fill="#5DA9FF" d="m6.79 9.5l6.157-.5l-2.368-2.75z"></svg:path></svg:g>`,
})
export class TokenBrandedSenseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
