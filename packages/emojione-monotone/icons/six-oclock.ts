import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneSixOclockIcon],svg[emojione-monotone-six-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V50h-4V35.445c-1.19-.693-2-1.969-2-3.445s.81-2.752 2-3.445V6h4v22.555c1.19.693 2 1.969 2 3.445s-.81 2.752-2 3.445"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneSixOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
