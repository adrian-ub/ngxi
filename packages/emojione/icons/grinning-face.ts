import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneGrinningFaceIcon],svg[emojione-grinning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:path fill="#664e27" d="M49.7 34.4c-.4-.5-1.1-.4-1.9-.4H16.2c-.8 0-1.5-.1-1.9.4C10.4 39.4 15 54 32 54s21.6-14.6 17.7-19.6"></svg:path><svg:path fill="#4c3526" d="M33.8 41.7c-.6 0-1.5.5-1.1 2c.2.7 1.2 1.6 1.2 2.8c0 2.4-3.8 2.4-3.8 0c0-1.2 1-2 1.2-2.8c.3-1.4-.6-2-1.1-2c-1.6 0-4.1 1.7-4.1 4.6c0 3.2 2.7 5.8 6 5.8s6-2.6 6-5.8c-.1-2.8-2.7-4.5-4.3-4.6"></svg:path><svg:path fill="#ff717f" d="M24.3 50.7c2.2 1 4.8 1.5 7.7 1.5s5.5-.6 7.7-1.5C37.6 49.6 35 49 32 49s-5.6.6-7.7 1.7"></svg:path><svg:path fill="#fff" d="M47 36H17.1c-2.1 0-2.1 4-.1 4h30c2 0 2-4 0-4"></svg:path><svg:g fill="#664e27"><svg:circle cx="20.5" cy="23" r="5"></svg:circle><svg:circle cx="43.5" cy="23" r="5"></svg:circle></svg:g>`,
})
export class EmojioneGrinningFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
