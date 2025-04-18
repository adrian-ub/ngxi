import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1BlackSmallSquareIcon],svg[emojione-v1-black-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#354a54" d="M42.611 39.31c0 1.2-.972 2.173-2.171 2.173H24.643a2.17 2.17 0 0 1-2.17-2.173V23.515a2.17 2.17 0 0 1 2.17-2.171H40.44c1.199 0 2.171.973 2.171 2.171z"></svg:path>`,
})
export class EmojioneV1BlackSmallSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
