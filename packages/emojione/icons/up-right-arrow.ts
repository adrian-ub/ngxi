import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneUpRightArrowIcon],svg[emojione-up-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M44.5 42.1L44 20l-22.1-.5l7.5 7.5l-13.3 13.2l7.3 7.3l13.2-13.3z"></svg:path>`,
})
export class EmojioneUpRightArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
