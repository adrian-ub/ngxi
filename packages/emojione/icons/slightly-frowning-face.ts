import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSlightlyFrowningFaceIcon],svg[emojione-slightly-frowning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="26.6" r="5"></svg:circle><svg:circle cx="43.5" cy="26.6" r="5"></svg:circle><svg:path d="M23 47.6c5.8-4.8 12.2-4.8 18 0c.7.6 1.3-.4.8-1.3c-1.8-3.4-5.3-6.5-9.8-6.5s-8.1 3.1-9.8 6.5c-.5.9.1 1.9.8 1.3"></svg:path></svg:g>`,
})
export class EmojioneSlightlyFrowningFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
