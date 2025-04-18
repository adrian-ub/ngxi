import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterXIcon],svg[emojione-letter-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M26.2 46.5h-7l9.3-14.8l-8.9-14.2h7.2l5.2 9.4l5.3-9.4h7l-8.9 14l9.4 15h-7.4L32 36.6z"></svg:path>`,
})
export class EmojioneLetterXIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
