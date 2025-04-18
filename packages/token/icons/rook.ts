import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRookIcon],svg[token-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.6 3H3v3.6h3.6V21h10.8V6.6H21V3h-3.6v3.6h-3.6V3h-3.6v3.6H6.6zm3.6 7.2h3.6v3.6h-3.6z" clip-rule="evenodd"></svg:path>`,
})
export class TokenRookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
