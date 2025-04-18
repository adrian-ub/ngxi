import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFaceWithOpenMouthIcon],svg[emojione-monotone-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 57.5C16.836 59.5 4.5 47.164 4.5 32S16.836 4.5 32 4.5S59.5 16.836 59.5 32S47.164 59.5 32 59.5"></svg:path><svg:circle cx="32" cy="45.139" r="7" fill="currentColor"></svg:circle><svg:circle cx="20.248" cy="25.045" r="4.5" fill="currentColor"></svg:circle><svg:circle cx="42.75" cy="25.045" r="4.5" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
