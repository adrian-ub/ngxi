import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKarateIcon],svg[token-karate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h12.214v3.857H6.857V21H3zm18 18H8.786v-3.857h8.357V3H21z"></svg:path>`,
})
export class TokenKarateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
