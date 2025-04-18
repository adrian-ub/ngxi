import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneLastQuarterMoonIcon],svg[emojione-monotone-last-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.002 2h-.004C15.431 2 2 15.432 2 32c0 16.569 13.431 30 29.998 30h.004C48.569 62 62 48.568 62 32S48.569 2 32.002 2M4 32C4 16.537 16.536 4 31.998 4c.244 0 .482.013.725.019c.748 4.341 1.279 15.229 1.279 27.981c0 12.754-.531 23.641-1.279 27.983c-.243.005-.481.017-.725.017C16.536 60 4 47.465 4 32"></svg:path>`,
})
export class EmojioneMonotoneLastQuarterMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
