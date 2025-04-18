import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForSurinameIcon],svg[emojione-monotone-flag-for-suriname-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M9.551 48.717a28 28 0 0 1-3.375-5.9h51.648a28 28 0 0 1-3.375 5.9zm44.897-33.434a28 28 0 0 1 3.376 5.9H6.176a28 28 0 0 1 3.376-5.9zm-16.37 26.55L32 37.219l-6.076 4.614l2.295-7.506l-6.052-4.65l7.494-.022L32 22.166l2.338 7.488l7.495.022l-6.054 4.65z"></svg:path>`,
})
export class EmojioneMonotoneFlagForSurinameIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
