import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBloxIcon],svg[token-blox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.437 11.399L3 7.799v9L11.437 21zM12 3L3.602 6.6L12 10.2l8.397-3.6zm9 4.5l-8.437 3.898v9.601L21 16.798z"></svg:path>`,
})
export class TokenBloxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
