import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1RightSpeechBubbleIcon],svg[emojione-v1-right-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#67b0dd" d="M31.909 5.792C14.286 5.792 0 15.347 0 27.133c0 6.611 4.493 12.518 11.546 16.433c-.871 2.876-3.374 6.488-9.716 9.889c0 0-1.83 1.235 0 2.747c0 0 12.266.725 20.98-8.61c2.882.575 5.931.887 9.1.887c17.62 0 31.905-9.555 31.905-21.342c0-11.79-14.285-21.345-31.904-21.345"></svg:path>`,
})
export class EmojioneV1RightSpeechBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
