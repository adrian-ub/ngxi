import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLyxeIcon],svg[token-lyxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l8 4.438v9.125L12 21l-8-4.438V7.438z"></svg:path><svg:path fill="currentColor" d="M14.25 8H9.775L7.5 12h4.576zm-4.443 8l-2.283-4h4.526l2.244 4z"></svg:path><svg:path fill="currentColor" d="m14.292 15.998l-2.244-3.992L14.25 8l2.248 4z"></svg:path>`,
})
export class TokenLyxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
