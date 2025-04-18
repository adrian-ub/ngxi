import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWhiteExclamationMarkIcon],svg[emojione-white-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#a6aeb0"><svg:path d="M37 42.4H27L23 2h18z"></svg:path><svg:ellipse cx="32" cy="54.4" rx="7.7" ry="7.6"></svg:ellipse></svg:g>`,
})
export class EmojioneWhiteExclamationMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
