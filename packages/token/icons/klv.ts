import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKlvIcon],svg[token-klv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20.678h-8.666L21 12.321z"></svg:path><svg:path fill="currentColor" d="M21 20.678H3V3.321z"></svg:path><svg:path fill="currentColor" d="M21 20.678L16.665 16.5l1-.964z" opacity=".14"></svg:path>`,
})
export class TokenKlvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
