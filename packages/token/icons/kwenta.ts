import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKwentaIcon],svg[token-kwenta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 14.117l9-5.632V3L3 8.633zm18 0l-9-5.632V3l9 5.633z"></svg:path><svg:path fill="currentColor" d="m3 9.883l9 5.633V21l-9-5.633zm18 0l-9 5.633V21l9-5.633z"></svg:path>`,
})
export class TokenKwentaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
