import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLeftSpeechBubbleIcon],svg[emojione-left-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fd1d9" d="M8.6 5h46.9c3.6 0 6.6 2.9 6.6 6.5v29.8c0 3.6-2.9 6.5-6.6 6.5h-6.9V59L38.1 47.8H8.6C5 47.8 2 44.9 2 41.3V11.5C2 7.9 4.9 5 8.6 5"></svg:path><svg:g fill="#fff"><svg:circle cx="48" cy="26.4" r="4.2"></svg:circle><svg:circle cx="32" cy="26.4" r="4.2"></svg:circle><svg:circle cx="16" cy="26.4" r="4.2"></svg:circle></svg:g>`,
})
export class EmojioneLeftSpeechBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
