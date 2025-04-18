import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBullIcon],svg[token-branded-bull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#02A6C2" d="M7.882 3.176H22v4.706H7.882z"></svg:path><svg:path fill="#5FCADE" d="M7.882 9.647h9.412v4.706H7.882z"></svg:path><svg:path fill="#ABEBF4" d="M7.882 16.118h4.706v4.706H7.882z"></svg:path><svg:path fill="#5FCADE" d="M2 9.647h4.706v4.706H2z"></svg:path></svg:g>`,
})
export class TokenBrandedBullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
