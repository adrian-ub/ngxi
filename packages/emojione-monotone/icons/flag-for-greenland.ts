import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForGreenlandIcon],svg[emojione-monotone-flag-for-greenland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.133 17.25c-8.145 0-14.75 6.604-14.75 14.75h29.5c0-8.146-6.605-14.75-14.75-14.75"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 2c15.439 0 28 12.561 28 28H38.883c0 8.145-6.604 14.75-14.75 14.75S9.383 40.145 9.383 32H4C4 16.561 16.561 4 32 4"></svg:path>`,
})
export class EmojioneMonotoneFlagForGreenlandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
