import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKompeteIcon],svg[token-kompete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.643 21V3H7.5v7.45L14.65 3h5.708l-7.695 7.81L20.357 21h-5.142l-5.362-7.335L7.5 16.05V21z"></svg:path>`,
})
export class TokenKompeteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
