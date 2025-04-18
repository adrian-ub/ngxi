import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneAstonishedFaceIcon],svg[emojione-astonished-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:circle cx="19" cy="29" r="11" fill="#fff"></svg:circle><svg:path fill="#664e27" d="M24 29c0 2.8-2.2 5-5 5s-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5"></svg:path><svg:path fill="#fff" d="M56 29c0 6.1-4.9 11-11 11s-11-4.9-11-11s4.9-11 11-11s11 4.9 11 11"></svg:path><svg:path fill="#664e27" d="M50 29c0 2.8-2.2 5-5 5s-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5"></svg:path><svg:path fill="#917524" d="M50.2 15.8c-3.2-2.7-7.5-3.9-11.7-3.1c-.6.1-1.1-2-.4-2.2c4.8-.9 9.8.5 13.5 3.6c.6.5-1 2.1-1.4 1.7m-24.7-3.3c-4.2-.7-8.5.4-11.7 3.1c-.4.4-2-1.2-1.4-1.7c3.7-3.2 8.7-4.5 13.5-3.6c.7.2.2 2.3-.4 2.2"></svg:path><svg:circle cx="32" cy="49" r="9" fill="#664e27"></svg:circle><svg:path fill="#fff" d="M26 46c1.2-2.4 3.4-4 6-4s4.8 1.6 6 4z"></svg:path>`,
})
export class EmojioneAstonishedFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
