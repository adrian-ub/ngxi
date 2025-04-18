import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1DiamondSuitIcon],svg[emojione-v1-diamond-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e03a4d" d="M56.28 32L32.14 63L8 32L32.14 1"></svg:path>`,
})
export class EmojioneV1DiamondSuitIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
