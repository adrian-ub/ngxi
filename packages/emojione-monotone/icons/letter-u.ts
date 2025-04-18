import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneLetterUIcon],svg[emojione-monotone-letter-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m11.644 32.952q0 4.626-1.434 7.205q-2.673 4.724-10.201 4.725q-7.527 0-10.219-4.725q-1.435-2.579-1.434-7.205V17.118h6.16v17.82q0 2.99.707 4.366q1.099 2.439 4.785 2.439q3.668 0 4.768-2.439q.706-1.377.705-4.366v-17.82h6.162v17.834z"></svg:path>`,
})
export class EmojioneMonotoneLetterUIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
