import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneEightThirtyIcon],svg[emojione-monotone-eight-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V58h-4V35.445a4 4 0 0 1-.913-.719L15.025 38.5L14 34.664l14.186-3.807A3.98 3.98 0 0 1 30 28.554V26h4v2.554c.268.156.519.334.741.545l2.231-.599L38 32.334l-2.11.566A4 4 0 0 1 34 35.445"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneEightThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
