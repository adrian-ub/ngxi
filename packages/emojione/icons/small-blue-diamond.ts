import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSmallBlueDiamondIcon],svg[emojione-small-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0071b8" d="m16.019 32l15.98-15.981l15.98 15.98L32 47.98z"></svg:path>`,
})
export class EmojioneSmallBlueDiamondIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
