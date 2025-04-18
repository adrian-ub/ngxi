import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1SmallOrangeDiamondIcon],svg[emojione-v1-small-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f6921e" d="M32.725 56.013L8.407 32.077l24.32-23.941l24.315 23.941z"></svg:path>`,
})
export class EmojioneV1SmallOrangeDiamondIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
