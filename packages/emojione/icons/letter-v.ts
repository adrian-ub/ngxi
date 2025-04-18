import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterVIcon],svg[emojione-letter-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M38.4 17.5h6.3l-9.9 29h-5.7l-9.8-29h6.5l6.3 22z"></svg:path>`,
})
export class EmojioneLetterVIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
