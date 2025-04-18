import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneDigitSevenIcon],svg[emojione-monotone-digit-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.999 2c-16.568 0-30 13.432-30 30s13.432 30 30 30C48.568 62 62 48.568 62 32S48.568 2 31.999 2M43 20.514q-2.477 2.59-5.036 7.436a45 45 0 0 0-3.903 10.303q-1.342 5.456-1.321 9.748h-5.641q.147-6.727 2.613-13.721t6.586-12.504H22.999V16H43z"></svg:path>`,
})
export class EmojioneMonotoneDigitSevenIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
