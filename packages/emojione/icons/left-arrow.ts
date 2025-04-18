import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLeftArrowIcon],svg[emojione-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M30.3 16L15 32l15.3 16V37.4H49V27.1H30.3z"></svg:path>`,
})
export class EmojioneLeftArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
