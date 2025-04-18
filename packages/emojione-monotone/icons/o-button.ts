import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneOButtonIcon],svg[emojione-monotone-o-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 21.053c-6.036 0-10.947 4.91-10.947 10.947c0 6.035 4.911 10.947 10.947 10.947S42.947 38.035 42.947 32c0-6.037-4.911-10.947-10.947-10.947"></svg:path><svg:path fill="currentColor" d="M52 2H12C6.477 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10M32 48c-8.822 0-16-7.178-16-16c0-8.82 7.178-16 16-16s16 7.18 16 16c0 8.822-7.178 16-16 16"></svg:path>`,
})
export class EmojioneMonotoneOButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
