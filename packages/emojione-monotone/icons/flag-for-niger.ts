import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForNigerIcon],svg[emojione-monotone-flag-for-niger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="7.867" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.787 22.167h52.426A27.9 27.9 0 0 1 60 32c0 3.459-.635 6.771-1.787 9.834H5.787A27.9 27.9 0 0 1 4 32c0-3.459.635-6.772 1.787-9.833"></svg:path>`,
})
export class EmojioneMonotoneFlagForNigerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
