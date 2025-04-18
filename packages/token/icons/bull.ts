import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBullIcon],svg[token-bull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.882 3.177H22v4.706H7.882zm0 6.47h9.412v4.706H7.882zm0 6.47h4.706v4.706H7.882zM2 9.647h4.706v4.706H2z"></svg:path>`,
})
export class TokenBullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
