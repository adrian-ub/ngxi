import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneLetterPIcon],svg[emojione-monotone-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.543 22.531h-5.464v8.543h5.464q2.076 0 3.228-1.043c1.152-1.043 1.151-1.797 1.151-3.307s-.384-2.586-1.151-3.229s-1.844-.964-3.228-.964"></svg:path><svg:path fill="currentColor" d="M31.999 2c-16.568 0-30 13.432-30 30s13.432 30 30 30C48.568 62 62 48.568 62 32S48.568 2 31.999 2m9.398 31.949q-2.549 2.126-7.277 2.125h-6.041v10.434h-6.023V17.492h12.458q4.308 0 6.87 2.244q2.561 2.244 2.562 6.949q-.001 5.136-2.549 7.264"></svg:path>`,
})
export class EmojioneMonotoneLetterPIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
