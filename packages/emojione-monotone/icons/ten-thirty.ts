import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneTenThirtyIcon],svg[emojione-monotone-ten-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m3.143 36L34 36.857V58h-4V35.445c-1.19-.693-2-1.969-2-3.445c0-.348.059-.68.142-1.001L18 20.857L20.857 18L30 27.143V26h4v2.554c1.19.692 2 1.968 2 3.446c0 .348-.058.68-.142 1.001L38 35.143z"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneTenThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
