import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForQatarIcon],svg[emojione-monotone-flag-for-qatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M4 32c0-11.168 6.574-20.826 16.054-25.317L28.066 8.4l-9.833 2.949l9.833 2.95l-9.833 2.95l9.833 2.95l-9.833 2.95l9.833 2.949l-9.833 2.95L28.066 32l-9.833 2.95l9.833 2.95l-9.833 2.949l9.833 2.95l-9.833 2.95l9.833 2.95l-9.833 2.95l9.833 2.949l-8.01 1.719C10.575 52.828 4 43.169 4 32"></svg:path>`,
})
export class EmojioneMonotoneFlagForQatarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
