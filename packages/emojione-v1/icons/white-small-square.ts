import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WhiteSmallSquareIcon],svg[emojione-v1-white-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d2d3" d="M43.36 39.932a2.18 2.18 0 0 1-2.181 2.181H25.316a2.18 2.18 0 0 1-2.181-2.181V24.068c0-1.205.978-2.181 2.181-2.181h15.863a2.18 2.18 0 0 1 2.181 2.181z"></svg:path>`,
})
export class EmojioneV1WhiteSmallSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
