import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOpenMailboxWithLoweredFlagIcon],svg[emojione-open-mailbox-with-lowered-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b0bdc6" d="m38 64l-8.8-1.2v-49H38z"></svg:path><svg:path fill="#7d8b91" d="M44.3 13.8H38V64l6.3-6.1z"></svg:path><svg:path fill="#333" d="M46.8 0c-8.2 0-35.6 9.5-35.6 9.5l24.6 40.4l28.3-17V17C64 6.3 57.6 0 46.8 0"></svg:path><svg:path fill="#697277" d="M17.2 8.5C6.4 8.5 0 16 0 26.8v17l35.7 6.1V29.2c0-10.8-7.6-20.7-18.5-20.7"></svg:path><svg:path fill="#94989b" d="M35.7 49.9L0 43.8l35.7-16.4z"></svg:path><svg:path fill="#ed4c5c" d="m62.7 14.2l-26 12.4v3.3l19.2-9.6v9.9l6.8-3.8z"></svg:path>`,
})
export class EmojioneOpenMailboxWithLoweredFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
