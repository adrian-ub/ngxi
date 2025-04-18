import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDownLeftArrowIcon],svg[emojione-down-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M42.1 44.5L20 44l-.5-22.1l7.5 7.5l13.2-13.3l7.3 7.3l-13.3 13.2z"></svg:path>`,
})
export class EmojioneDownLeftArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
