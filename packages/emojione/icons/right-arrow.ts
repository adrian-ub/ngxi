import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRightArrowIcon],svg[emojione-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M33.7 16L49 32L33.7 48V37.4H15V27.1h18.7z"></svg:path>`,
})
export class EmojioneRightArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
