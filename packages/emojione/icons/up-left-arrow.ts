import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneUpLeftArrowIcon],svg[emojione-up-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M19.5 42.1L20 20l22.1-.5l-7.5 7.5l13.3 13.2l-7.3 7.3l-13.2-13.3z"></svg:path>`,
})
export class EmojioneUpLeftArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
