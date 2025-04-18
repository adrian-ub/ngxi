import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneExpressionlessFaceIcon],svg[emojione-expressionless-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:path fill="#664e27" d="M40 48H24c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4M27.1 32h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4m25.8 0h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4"></svg:path>`,
})
export class EmojioneExpressionlessFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
