import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLeftRightArrowIcon],svg[emojione-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m12 32l15.5 16V36.6h9V48L52 32L36.5 16v11.4h-9V16z"></svg:path>`,
})
export class EmojioneLeftRightArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
