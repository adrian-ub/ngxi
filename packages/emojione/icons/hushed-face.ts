import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneHushedFaceIcon],svg[emojione-hushed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20" cy="27" r="5"></svg:circle><svg:circle cx="44" cy="27" r="5"></svg:circle></svg:g><svg:path fill="#917524" d="M50.2 17c-3.2-2.7-7.5-3.9-11.7-3.1c-.6.1-1.1-2-.4-2.2c4.8-.9 9.8.5 13.5 3.6c.6.5-1 2.1-1.4 1.7m-24.7-3.2c-4.2-.7-8.5.4-11.7 3.1c-.4.4-2-1.2-1.4-1.7c3.7-3.2 8.7-4.5 13.5-3.6c.7.1.2 2.3-.4 2.2"></svg:path><svg:circle cx="32" cy="48" r="5" fill="#664e27"></svg:circle>`,
})
export class EmojioneHushedFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
