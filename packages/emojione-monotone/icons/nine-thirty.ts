import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneNineThirtyIcon],svg[emojione-monotone-nine-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m5.975 33.5l-3.029-.813c-.273.3-.592.553-.945.758V58h-4V35.445a4 4 0 0 1-1.905-2.597L15 29.334l1.027-3.834l13.276 3.563q.319-.29.696-.508V26h4v2.554a3.97 3.97 0 0 1 1.798 2.251l3.203.859z"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneNineThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
