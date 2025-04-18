import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneThreeOclockIcon],svg[emojione-monotone-three-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17.998 32H35.445A4 4 0 0 1 34 35.445V38h-4v-2.555A4 4 0 0 1 28.555 34h-2.553L26 30h2.555c.35-.6.845-1.096 1.445-1.445V6h4v22.555A4 4 0 0 1 35.445 30H50z"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneThreeOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
