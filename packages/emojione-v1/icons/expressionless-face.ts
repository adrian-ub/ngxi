import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ExpressionlessFaceIcon],svg[emojione-v1-expressionless-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.812" cy="31.814" r="31.812" fill="#fbbf67"></svg:circle><svg:path fill="#633c17" d="M44.909 48.47c0 1.169-1.674 2.117-3.743 2.117H22.457c-2.069 0-3.743-.948-3.743-2.117s1.674-2.12 3.743-2.12h18.709c2.069 0 3.743.95 3.743 2.12M25.541 27.29c0 1.169-1.171 2.12-2.621 2.12H9.82c-1.448 0-2.621-.951-2.621-2.12s1.173-2.118 2.621-2.118h13.1c1.45 0 2.621.949 2.621 2.118m30.237 0c0 1.169-1.171 2.12-2.621 2.12h-13.1c-1.448 0-2.621-.951-2.621-2.12s1.173-2.118 2.621-2.118h13.1c1.449 0 2.62.949 2.62 2.118"></svg:path>`,
})
export class EmojioneV1ExpressionlessFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
