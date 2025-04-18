import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForColombiaIcon],svg[emojione-monotone-flag-for-colombia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 2c15.439 0 28 12.561 28 28H4C4 16.561 16.561 4 32 4m25 41H7c-.336-.654-.715-1.318-1-2h52c-.285.682-.664 1.346-1 2"></svg:path>`,
})
export class EmojioneMonotoneFlagForColombiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
