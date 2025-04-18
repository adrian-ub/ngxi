import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneSixThirtyIcon],svg[emojione-monotone-six-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V58h-4V47.518L29.334 50L25.5 48.973l3.772-14.061A3.98 3.98 0 0 1 28 32c0-1.478.81-2.753 2-3.446V26h4v.624l1.5.4l-.6 2.234A3.97 3.97 0 0 1 36 32c0 1.477-.81 2.753-2 3.445"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneSixThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
