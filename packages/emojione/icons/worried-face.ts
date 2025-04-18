import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWorriedFaceIcon],svg[emojione-worried-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="29.6" r="5"></svg:circle><svg:circle cx="43.5" cy="29.6" r="5"></svg:circle></svg:g><svg:path fill="#917524" d="M51.2 18.7c-3.2-2.7-7.5-3.9-11.7-3.1c-.6.1-1.1-2-.4-2.2c4.8-.9 9.8.5 13.5 3.6c.6.5-1 2.1-1.4 1.7m-26.7-3.3c-4.2-.7-8.5.4-11.7 3.1c-.4.4-2-1.2-1.4-1.7c3.7-3.2 8.7-4.5 13.5-3.6c.7.2.2 2.4-.4 2.2"></svg:path><svg:path fill="#664e27" d="M40.6 44.4c-5.4-2.5-11.8-2.5-17.2 0c-1.3.6.3 4.2 1.7 3.5c3.6-1.7 8.9-2.3 13.9 0c1.3.6 3-2.8 1.6-3.5"></svg:path>`,
})
export class EmojioneWorriedFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
