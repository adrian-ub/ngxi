import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneEyeInSpeechBubbleIcon],svg[emojione-eye-in-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fd1d9" d="M55.6 41.7c4-4.4 6.4-8.9 6.4-11.5C62 24.3 48.6 7 32 7S2 24.3 2 30.2s13.4 23.2 30 23.2c4.6 0 9-1.3 12.9-3.4l10.7 7z"></svg:path><svg:circle cx="32" cy="30.2" r="15" fill="#fff"></svg:circle><svg:path fill="#4fd1d9" d="M32 21.2c-1 0-1.9.2-2.8.4c1.1.9 1.8 2.3 1.8 3.8c0 2.8-2.2 5-5 5c-1.1 0-2.1-.4-3-1v.7c0 5 4 9 9 9s9-4 9-9s-4-8.9-9-8.9"></svg:path>`,
})
export class EmojioneEyeInSpeechBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
