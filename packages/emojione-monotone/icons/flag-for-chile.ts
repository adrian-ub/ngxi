import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForChileIcon],svg[emojione-monotone-flag-for-chile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M18.385 16.513L20.2 11.35l1.87 5.163h5.996l-4.84 3.352l1.836 5.253l-4.862-3.229l-4.862 3.229l1.836-5.253l-4.84-3.352zM4 31v-2h28V4c15.104 0 27.471 12.022 28 27z"></svg:path>`,
})
export class EmojioneMonotoneFlagForChileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
