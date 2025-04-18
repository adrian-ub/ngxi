import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenIskIcon],svg[token-isk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.896 3l6.688 6.556a3.3 3.3 0 0 1 0 4.737l-2.06 2.018l-4.624-4.534A6.124 6.124 0 0 1 11.9 3zm.208 18l-6.688-6.556a3.3 3.3 0 0 1 0-4.737l2.06-2.018l4.623 4.534a6.127 6.127 0 0 1 0 8.777z"></svg:path>`,
})
export class TokenIskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
