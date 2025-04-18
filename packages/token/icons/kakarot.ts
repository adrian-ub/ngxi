import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKakarotIcon],svg[token-kakarot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v2.99c-.713.12-3.284.639-5.296 2.978c-2.153 2.504-2.164 5.348-2.149 6.028h-3.11c.015-.68.004-3.524-2.15-6.028C6.286 6.628 3.714 6.109 3 5.99V3a11.7 11.7 0 0 1 9 5.83A11.7 11.7 0 0 1 21 3m0 14.998H3V21h18z"></svg:path>`,
})
export class TokenKakarotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
