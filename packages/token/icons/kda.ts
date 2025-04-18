import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKdaIcon],svg[token-kda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.357 21h-5.571L9.07 12.857l2.286-4.714zM3.643 3h4.5v18h-4.5z"></svg:path><svg:path fill="currentColor" d="M19.357 3h-5.142L8.143 9.187v5.623z"></svg:path>`,
})
export class TokenKdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
