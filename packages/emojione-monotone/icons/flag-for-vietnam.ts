import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForVietnamIcon],svg[emojione-monotone-flag-for-vietnam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m9.724 43.767L32 38.847l-9.726 6.92l3.674-11.255l-9.682-7.183h12.102L32 16.267l3.739 11.063h11.994l-9.682 7.183z"></svg:path>`,
})
export class EmojioneMonotoneFlagForVietnamIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
