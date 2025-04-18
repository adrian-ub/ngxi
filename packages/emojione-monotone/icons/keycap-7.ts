import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneKeycap7Icon],svg[emojione-monotone-keycap-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 2H12C6.478 2 2 6.477 2 12v40c0 5.523 4.478 10 10 10h40c5.522 0 10-4.477 10-10V12c0-5.523-4.478-10-10-10m5 43.666A8.333 8.333 0 0 1 48.667 54H15.333A8.333 8.333 0 0 1 7 45.666V12.334A8.333 8.333 0 0 1 15.333 4h33.334A8.333 8.333 0 0 1 57 12.334z"></svg:path><svg:path fill="currentColor" d="M23 18.775V13h20v4.514q-2.477 2.59-5.036 7.436a45 45 0 0 0-3.903 10.303q-1.342 5.456-1.321 9.748H27.1q.146-6.727 2.612-13.72q2.467-6.995 6.586-12.504H23z"></svg:path>`,
})
export class EmojioneMonotoneKeycap7Icon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
