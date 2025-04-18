import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForBulgariaIcon],svg[emojione-monotone-flag-for-bulgaria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 2c11.917 0 22.112 7.486 26.147 18H5.853C9.888 11.486 20.083 4 32 4M6.254 43a28 28 0 0 1-.762-2h53.016a28 28 0 0 1-.762 2z"></svg:path>`,
})
export class EmojioneMonotoneFlagForBulgariaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
