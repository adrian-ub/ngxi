import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKromaIcon],svg[token-kroma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.375l-9 5.75L7.5 12L12 9.125L16.5 12L21 9.125z"></svg:path><svg:path fill="currentColor" d="m21 9.125l-9 5.75l-9-5.75v5.75l9 5.75l9-5.75z"></svg:path>`,
})
export class TokenKromaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
