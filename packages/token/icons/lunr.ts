import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLunrIcon],svg[token-lunr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.11 16.763a.16.16 0 0 1-.12-.06a.15.15 0 0 1-.028-.13a7.7 7.7 0 0 0 .244-1.928c0-4.383-3.674-7.94-8.206-7.94s-8.206 3.557-8.206 7.94c0 .667.085 1.313.244 1.927a.154.154 0 0 1-.149.191a.15.15 0 0 1-.132-.09a9 9 0 1 1 16.486 0a.15.15 0 0 1-.132.09M12 19.94a4.765 4.765 0 1 0 0-9.53a4.765 4.765 0 0 0 0 9.53"></svg:path>`,
})
export class TokenLunrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
