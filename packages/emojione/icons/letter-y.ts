import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterYIcon],svg[emojione-letter-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M38 17.5h6.9l-9.7 18.1v10.9h-6.1V35.6l-10-18.1h7.1l6 12.6z"></svg:path>`,
})
export class EmojioneLetterYIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
