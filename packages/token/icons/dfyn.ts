import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDfynIcon],svg[token-dfyn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.55 13.286H5.314L7.886 3h4.145c2.077 0 3.461 1.882 3.625 3.62c.129 1.39-.54 3.328-.89 4.094h3.92L8.642 21z"></svg:path>`,
})
export class TokenDfynIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
