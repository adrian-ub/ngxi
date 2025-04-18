import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForBangladeshIcon],svg[emojione-monotone-flag-for-bangladesh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-5.9 43.872c-7.662 0-13.874-6.211-13.874-13.872c0-7.663 6.211-13.874 13.874-13.874S39.973 24.337 39.973 32c0 7.661-6.209 13.872-13.873 13.872"></svg:path>`,
})
export class EmojioneMonotoneFlagForBangladeshIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
