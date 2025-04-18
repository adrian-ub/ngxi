import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenIxtIcon],svg[token-ixt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2.5v2.5H3zm0 3.5h2.5V17H3zM16.747 7H21l-5.074 4.979L21 17h-4.253L11.5 11.98z"></svg:path><svg:path fill="currentColor" d="M10.753 7H6.5l5.074 4.979L6.5 17h4.253L16 11.98z"></svg:path>`,
})
export class TokenIxtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
