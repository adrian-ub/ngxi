import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForGermanyIcon],svg[emojione-monotone-flag-for-germany-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M6.254 21h51.492q.368.864.679 1.756H5.575q.311-.892.679-1.756M32 60C20.083 60 9.888 52.514 5.853 42h52.294C54.112 52.514 43.917 60 32 60"></svg:path>`,
})
export class EmojioneMonotoneFlagForGermanyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
