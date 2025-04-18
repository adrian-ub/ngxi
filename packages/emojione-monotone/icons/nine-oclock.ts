import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneNineOclockIcon],svg[emojione-monotone-nine-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m6 32h-2.555c-.35.6-.845 1.096-1.445 1.445V38h-4v-2.555A4 4 0 0 1 28.555 34H14v-4h14.555c.35-.6.846-1.096 1.445-1.445V6h4v22.554c.601.35 1.096.845 1.445 1.446H38z"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneNineOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
