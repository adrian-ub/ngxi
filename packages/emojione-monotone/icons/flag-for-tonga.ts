import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForTongaIcon],svg[emojione-monotone-flag-for-tonga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 13.316h-3.934v4.917H8.4v3.934h4.916v4.916h3.934v-4.916h4.917v-3.934H17.25z"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-5.9 2.631V32H4C4 18.585 13.484 7.349 26.1 4.631"></svg:path>`,
})
export class EmojioneMonotoneFlagForTongaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
