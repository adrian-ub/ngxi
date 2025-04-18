import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1LargeOrangeDiamondIcon],svg[emojione-v1-large-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f6921e" d="M63 32L32 62.998L1 32L32 1"></svg:path>`,
})
export class EmojioneV1LargeOrangeDiamondIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
