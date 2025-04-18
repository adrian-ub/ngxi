import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneUpArrowIcon],svg[emojione-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M48 30.3L32 15L16 30.3h10.6V49h10.3V30.3z"></svg:path>`,
})
export class EmojioneUpArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
