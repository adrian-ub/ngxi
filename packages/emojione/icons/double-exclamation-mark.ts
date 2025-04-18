import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDoubleExclamationMarkIcon],svg[emojione-double-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#ff5a79"><svg:path d="M23 42.4H13L9 2h18z"></svg:path><svg:ellipse cx="18" cy="54.4" rx="7.7" ry="7.6"></svg:ellipse><svg:path d="M51 42.4H41L37 2h18z"></svg:path><svg:ellipse cx="46" cy="54.4" rx="7.7" ry="7.6"></svg:ellipse></svg:g>`,
})
export class EmojioneDoubleExclamationMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
