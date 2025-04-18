import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneCinemaIcon],svg[emojione-monotone-cinema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35 27.869A8 8 0 0 1 28 32h14a8 8 0 0 1-7-4.131"></svg:path><svg:circle cx="28" cy="24" r="3" fill="currentColor"></svg:circle><svg:circle cx="42" cy="24" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14 30c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H23c-1.1 0-2-.9-2-2v-.5L16 48V32l5 2.5V34c0-1.1.9-2 2-2h5a8 8 0 0 1 0-16a8 8 0 0 1 7 4.131A8 8 0 0 1 42 16a8 8 0 0 1 0 16z"></svg:path>`,
})
export class EmojioneMonotoneCinemaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
