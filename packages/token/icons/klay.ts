import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKlayIcon],svg[token-klay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.321 3c2.025.05 3.91.782 5.451 2.098L7.742 15.144z"></svg:path><svg:path fill="currentColor" d="M12.321 3c2.025.05 3.91.782 5.451 2.098L7.742 15.144zm.822 9.022l5.782-5.805a9.095 9.095 0 0 1 0 11.565z"></svg:path><svg:path fill="currentColor" d="m13.143 12.022l5.782-5.805a9.095 9.095 0 0 1 0 11.565zm-10.126-.584l7.043-7.07l-5.018 13.364a9.07 9.07 0 0 1-2.025-6.294"></svg:path><svg:path fill="currentColor" d="m3.017 11.438l7.043-7.07l-5.018 13.364a9.07 9.07 0 0 1-2.025-6.294m3.23 7.464l5.788-5.754l5.782 5.754A9 9 0 0 1 12.035 21a9 9 0 0 1-5.788-2.098"></svg:path><svg:path fill="currentColor" d="m6.247 18.902l5.788-5.754l5.782 5.754A9 9 0 0 1 12.035 21a9 9 0 0 1-5.788-2.098"></svg:path>`,
})
export class TokenKlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
