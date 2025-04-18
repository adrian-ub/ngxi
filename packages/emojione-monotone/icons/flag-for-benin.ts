import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForBeninIcon],svg[emojione-monotone-flag-for-benin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m28 30H24v26.829q-.93-.277-1.833-.616V5.787A27.9 27.9 0 0 1 32 4c15.439 0 28 12.561 28 28"></svg:path>`,
})
export class EmojioneMonotoneFlagForBeninIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
