import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneWaxingCrescentMoonIcon],svg[emojione-monotone-waxing-crescent-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m7.417 56.999C45.089 54.138 49 43.876 49 32S45.089 9.862 39.417 5.001C51.28 8.252 60 19.104 60 32s-8.72 23.748-20.583 26.999"></svg:path>`,
})
export class EmojioneMonotoneWaxingCrescentMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
