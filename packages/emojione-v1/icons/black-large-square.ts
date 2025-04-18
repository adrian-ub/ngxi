import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1BlackLargeSquareIcon],svg[emojione-v1-black-large-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#354a54" d="M63.998 57.1a6.9 6.9 0 0 1-6.899 6.903h-50.2A6.9 6.9 0 0 1 .003 57.1V6.9C.003 3.09 3.091 0 6.899 0h50.2a6.9 6.9 0 0 1 6.899 6.9z"></svg:path>`,
})
export class EmojioneV1BlackLargeSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
