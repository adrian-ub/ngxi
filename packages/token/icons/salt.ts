import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSaltIcon],svg[token-salt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.525l4.966 9.992H7.037zM12 3L3.31 21h17.38z"></svg:path>`,
})
export class TokenSaltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
