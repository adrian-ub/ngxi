import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDowncastFaceWithSweatIcon],svg[emojione-downcast-face-with-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffdd67" d="M2 32c0 16.6 13.4 30 30 30s30-13.4 30-30S48.6 2 32 2S2 15.4 2 32"></svg:path><svg:path fill="#65b1ef" d="M48.5 16.3c0 9.9 13.5 9.9 13.5 0C62 9.1 55.3 2 55.3 2s-6.8 7.1-6.8 14.3"></svg:path><svg:g fill="#664e27"><svg:circle cx="43.5" cy="36" r="5"></svg:circle><svg:circle cx="20.5" cy="36" r="5"></svg:circle></svg:g><svg:path fill="#917524" d="M25.6 21.9c-3.2 2.7-7.5 3.9-11.7 3.1c-.6-.1-1.1 2-.4 2.2c4.8.9 9.8-.5 13.5-3.6c.5-.5-1-2.1-1.4-1.7m24.5 3c-4.2.7-8.5-.4-11.7-3.1c-.4-.4-2 1.2-1.4 1.7c3.7 3.2 8.7 4.5 13.5 3.6c.7-.2.2-2.3-.4-2.2"></svg:path><svg:path fill="#664e27" d="M40 52H24c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4"></svg:path>`,
})
export class EmojioneDowncastFaceWithSweatIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
