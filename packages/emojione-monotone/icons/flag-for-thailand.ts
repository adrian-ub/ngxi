import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForThailandIcon],svg[emojione-monotone-flag-for-thailand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-17.756 8.367h35.512a28.16 28.16 0 0 1 7.628 9.833H6.616a28.2 28.2 0 0 1 7.628-9.833m35.512 43.266H14.244A28.15 28.15 0 0 1 6.616 43.8h50.768a28.2 28.2 0 0 1-7.628 9.833"></svg:path>`,
})
export class EmojioneMonotoneFlagForThailandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
