import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WhiteLargeSquareIcon],svg[emojione-v1-white-large-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d2d3" d="M63.998 57.1a6.9 6.9 0 0 1-6.897 6.903h-50.2A6.9 6.9 0 0 1 .005 57.1V6.9A6.9 6.9 0 0 1 6.901 0h50.2a6.897 6.897 0 0 1 6.897 6.9z"></svg:path>`,
})
export class EmojioneV1WhiteLargeSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
