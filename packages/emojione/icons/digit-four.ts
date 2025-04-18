import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDigitFourIcon],svg[emojione-digit-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M33.7 48v-6.4H20v-5.3L34.5 16h5.4v20.2H44v5.4h-4.1V48zm0-11.8V25.3L26 36.2z"></svg:path>`,
})
export class EmojioneDigitFourIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
