import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFourThirtyIcon],svg[emojione-monotone-four-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m11.143 44L34 36.857V58h-4V35.445c-1.19-.693-2-1.969-2-3.445c0-.348.059-.68.142-1.001L26 28.857L28.855 26L30 27.145V26h4v2.555A3.98 3.98 0 0 1 36 32c0 .348-.059.68-.143 1.002L46 43.143z"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneFourThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
