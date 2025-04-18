import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForCameroonIcon],svg[emojione-monotone-flag-for-cameroon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M20 6.707a28 28 0 0 1 2-.854v52.294a29 29 0 0 1-2-.854zM37.254 40L32 36.246L26.746 40l1.984-6.105l-5.23-3.785l6.479-.018L32 24l2.021 6.092l6.479.018l-5.232 3.785zM42 58.147V5.853C52.514 9.888 60 20.083 60 32s-7.486 22.112-18 26.147"></svg:path>`,
})
export class EmojioneMonotoneFlagForCameroonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
