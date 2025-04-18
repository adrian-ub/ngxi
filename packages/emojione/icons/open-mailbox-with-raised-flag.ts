import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOpenMailboxWithRaisedFlagIcon],svg[emojione-open-mailbox-with-raised-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b0bdc6" d="m38 64l-8.8-1.2v-49H38z"></svg:path><svg:path fill="#7d8b91" d="M44.3 13.8H38V64l6.3-6.1z"></svg:path><svg:path fill="#697277" d="M17.2 8.5c-1.9 0-3.7.2-5.3.7C4.3 11.3 0 17.9 0 26.8v17l35.7 6.1V29.2c0-10.8-7.6-20.7-18.5-20.7"></svg:path><svg:path fill="#94989b" d="M35.7 49.9L0 43.8l35.7-16.3z"></svg:path><svg:path fill="#b0bdc6" d="m44 34.6l-11.3-8.4l5.6-11.9c.4.4.8 1 1 1.7L44 32.7c.1.7.1 1.4 0 1.9m-36.1-17L24 28.2l-8.5 16.7c-.7-.4-1.3-1.1-1.5-2.1L7.6 20.1c-.2-1-.1-1.8.3-2.5"></svg:path><svg:path fill="#cad5dd" d="m30.1 32l2.6-5.8L44 34.6c-.2.5-.4.9-.8 1L17.6 45c-.7.3-1.4.1-2-.2L24 28.2z"></svg:path><svg:path fill="#dfe9ef" d="M9.5 16.5L37 13.8c.4 0 .9.2 1.3.5l-5.6 11.9l-2.6 5.8l-6.1-3.8L7.9 17.6c.3-.6.9-1 1.6-1.1"></svg:path><svg:path fill="#333" d="M46.8 0c-7.4 0-30.3 7.7-34.9 9.2c1.6-.4 3.4-.7 5.3-.7c10.9 0 18.5 9.9 18.5 20.7v20.7l28.3-17V17C64 6.3 57.6 0 46.8 0"></svg:path><svg:path fill="#ed4c5c" d="M37.2 6.4v29.2l2.8-1.3V15.6l11.2-4.3V1.6z"></svg:path>`,
})
export class EmojioneOpenMailboxWithRaisedFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
