import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneSlightlyFrowningFaceIcon],svg[emojione-monotone-slightly-frowning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 57.5C16.836 59.5 4.5 47.164 4.5 32S16.836 4.5 32 4.5S59.5 16.836 59.5 32S47.164 59.5 32 59.5"></svg:path><svg:circle cx="20.5" cy="26.592" r="5" fill="currentColor"></svg:circle><svg:circle cx="43.5" cy="26.592" r="5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M32 39.794c-4.539 0-8.082 3.058-9.836 6.491c-.471.918.154 1.913.848 1.34c5.793-4.801 12.219-4.771 17.977 0c.693.573 1.318-.422.848-1.34c-1.755-3.433-5.3-6.491-9.837-6.491"></svg:path>`,
})
export class EmojioneMonotoneSlightlyFrowningFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
