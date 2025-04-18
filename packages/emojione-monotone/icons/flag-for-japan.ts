import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForJapanIcon],svg[emojione-monotone-flag-for-japan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="11.8" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 58C16.561 60 4 47.439 4 32S16.561 4 32 4s28 12.561 28 28s-12.561 28-28 28"></svg:path>`,
})
export class EmojioneMonotoneFlagForJapanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
