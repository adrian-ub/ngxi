import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForYemenIcon],svg[emojione-monotone-flag-for-yemen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.787 22.167h52.426C59.365 25.229 60 28.541 60 32s-.635 6.771-1.787 9.833H5.787C4.635 38.771 4 35.459 4 32s.635-6.771 1.787-9.833"></svg:path>`,
})
export class EmojioneMonotoneFlagForYemenIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
