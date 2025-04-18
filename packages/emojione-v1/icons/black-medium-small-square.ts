import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1BlackMediumSmallSquareIcon],svg[emojione-v1-black-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#354a54" d="M48.566 44.991a3.57 3.57 0 0 1-3.572 3.575H19.005c-1.972 0-3.57-1.6-3.57-3.575V19.005a3.57 3.57 0 0 1 3.57-3.572h25.989c1.975 0 3.572 1.6 3.572 3.572z"></svg:path>`,
})
export class EmojioneV1BlackMediumSmallSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
