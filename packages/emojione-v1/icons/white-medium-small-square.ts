import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WhiteMediumSmallSquareIcon],svg[emojione-v1-white-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d2d3" d="M49.717 44.915a3.55 3.55 0 0 1-3.549 3.552H20.332a3.55 3.55 0 0 1-3.548-3.552V19.083a3.55 3.55 0 0 1 3.548-3.551h25.836a3.55 3.55 0 0 1 3.549 3.551z"></svg:path>`,
})
export class EmojioneV1WhiteMediumSmallSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
