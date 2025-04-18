import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBlackLargeSquareIcon],svg[emojione-black-large-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#333" d="M2 2h60v60H2z"></svg:path>`,
})
export class EmojioneBlackLargeSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
