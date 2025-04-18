import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFullMoonIcon],svg[emojione-monotone-full-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32c0 16.569 13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 58C16.537 60 4 47.465 4 32S16.537 4 32 4c15.465 0 28 12.536 28 28S47.465 60 32 60"></svg:path>`,
})
export class EmojioneMonotoneFullMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
