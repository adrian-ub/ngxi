import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForKuwaitIcon],svg[emojione-monotone-flag-for-kuwait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9.834 39.834L12.21 51.79a28 28 0 0 1-1.348-1.458l9.304-9.327v-18.01l-9.297-9.334a28 28 0 0 1 1.341-1.451l9.956 9.957h36.047C59.365 25.228 60 28.541 60 32s-.635 6.771-1.787 9.834z"></svg:path>`,
})
export class EmojioneMonotoneFlagForKuwaitIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
