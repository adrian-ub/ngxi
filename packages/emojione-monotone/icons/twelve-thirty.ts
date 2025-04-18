import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneTwelveThirtyIcon],svg[emojione-monotone-twelve-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m4 30c0 1.477-.81 2.753-2 3.445V58h-4V38.51l-2-.533l.925-3.447A3.96 3.96 0 0 1 28 32c0-1.479.81-2.753 2-3.445V26h1.213l2.951-11L38 16.027L34.538 28.93A3.98 3.98 0 0 1 36 32"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneTwelveThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
