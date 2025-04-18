import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WhiteMediumSquareIcon],svg[emojione-v1-white-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d2d3" d="M53.935 49.29a4.71 4.71 0 0 1-4.707 4.713h-34.27a4.71 4.71 0 0 1-4.708-4.713V15.03a4.71 4.71 0 0 1 4.708-4.709h34.27c2.6 0 4.707 2.109 4.707 4.709z"></svg:path>`,
})
export class EmojioneV1WhiteMediumSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
