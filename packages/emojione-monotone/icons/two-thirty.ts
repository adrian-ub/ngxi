import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneTwoThirtyIcon],svg[emojione-monotone-two-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V58h-4V35.445a4 4 0 0 1-.944-.758l-3.029.813L25 31.666l3.201-.859A3.98 3.98 0 0 1 30 28.555V26h4v2.555c.251.146.484.313.697.509L47.975 25.5L49 29.336L35.905 32.85A4 4 0 0 1 34 35.445"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneTwoThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
