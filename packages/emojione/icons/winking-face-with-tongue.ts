import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWinkingFaceWithTongueIcon],svg[emojione-winking-face-with-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:path fill="#fff" d="M31.2 24.6c0 5.5-4.5 10-10 10s-10-4.5-10-10s4.5-10 10-10c5.6 0 10 4.5 10 10"></svg:path><svg:g fill="#664e27"><svg:circle cx="21.2" cy="24.6" r="4.5"></svg:circle><svg:path d="M51 29.1C49.1 25 46.3 23 43.5 23s-5.6 2-7.5 6.1c-.2.4.8 1.2 1.3.8c1.8-1.5 4-2.1 6.2-2.1s4.4.6 6.2 2.1c.5.4 1.5-.4 1.3-.8M47.9 38H16.1c-.7 0-1.1.5-1.1 1c0 7.3 6 15 17 15s17-7.7 17-15c0-.5-.4-1-1.1-1"></svg:path></svg:g><svg:path fill="#ff717f" d="M41.2 44H22.8c-.7 0-.8.3-.8.8v4C22 57.6 26.5 62 32 62s10-4.4 10-13.2v-4c0-.5-.1-.8-.8-.8"></svg:path><svg:path fill="#e2596c" d="M33.5 44L32 57.8L30.5 44z"></svg:path>`,
})
export class EmojioneWinkingFaceWithTongueIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
