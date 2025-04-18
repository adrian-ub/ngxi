import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForCongoBrazzavilleIcon],svg[emojione-monotone-flag-for-congo-brazzaville-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M8.447 47.113L47.113 8.447a28.2 28.2 0 0 1 8.402 8.382L16.83 55.516a28.2 28.2 0 0 1-8.383-8.403"></svg:path>`,
})
export class EmojioneMonotoneFlagForCongoBrazzavilleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
