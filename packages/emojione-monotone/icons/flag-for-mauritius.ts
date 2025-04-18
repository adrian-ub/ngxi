import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForMauritiusIcon],svg[emojione-monotone-flag-for-mauritius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 2c9.61 0 18.104 4.868 23.148 12.267H8.852C13.896 8.868 22.39 4 32 4m23.148 43.733H8.852A27.83 27.83 0 0 1 4 32h56a27.83 27.83 0 0 1-4.852 15.733"></svg:path>`,
})
export class EmojioneMonotoneFlagForMauritiusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
