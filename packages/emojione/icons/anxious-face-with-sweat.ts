import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneAnxiousFaceWithSweatIcon],svg[emojione-anxious-face-with-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:path fill="#664e27" d="M40.3 48.1c0 4.6-3.7 8.3-8.3 8.3s-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3"></svg:path><svg:path fill="#fff" d="M26.2 44.8c1.2-2 3.3-3.4 5.8-3.4s4.7 1.3 5.8 3.4z"></svg:path><svg:g fill="#664e27"><svg:circle cx="43.5" cy="33" r="4.5"></svg:circle><svg:circle cx="20.5" cy="33" r="4.5"></svg:circle></svg:g><svg:path fill="#917524" d="M25.6 17.9c-3.2 2.7-7.5 3.9-11.7 3.1c-.6-.1-1.1 2-.4 2.2c4.8.9 9.8-.5 13.5-3.6c.5-.5-1-2.1-1.4-1.7m24.5 3c-4.2.7-8.5-.4-11.7-3.1c-.4-.4-2 1.2-1.4 1.7c3.7 3.2 8.7 4.5 13.5 3.6c.7-.2.2-2.3-.4-2.2"></svg:path><svg:path fill="#65b1ef" d="M62 18.5c0 9.4-12.7 9.4-12.7 0c0-6.9 6.4-13.5 6.4-13.5S62 11.7 62 18.5"></svg:path>`,
})
export class EmojioneAnxiousFaceWithSweatIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
