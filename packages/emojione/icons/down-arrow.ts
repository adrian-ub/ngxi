import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDownArrowIcon],svg[emojione-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M16 33.7L32 49l16-15.3H37.4V15H27.1v18.7z"></svg:path>`,
})
export class EmojioneDownArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
