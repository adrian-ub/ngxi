import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForBelgiumIcon],svg[emojione-monotone-flag-for-belgium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9.833 56.213V5.787A27.9 27.9 0 0 1 32 4c3.459 0 6.771.635 9.834 1.787v52.426A27.9 27.9 0 0 1 32 60a27.9 27.9 0 0 1-9.833-1.787"></svg:path>`,
})
export class EmojioneMonotoneFlagForBelgiumIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
