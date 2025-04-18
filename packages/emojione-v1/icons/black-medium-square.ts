import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1BlackMediumSquareIcon],svg[emojione-v1-black-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#354a54" d="M53.799 49.21a4.7 4.7 0 0 1-4.701 4.702h-34.2A4.7 4.7 0 0 1 10.2 49.21v-34.2a4.7 4.7 0 0 1 4.698-4.701h34.2a4.7 4.7 0 0 1 4.701 4.701z"></svg:path>`,
})
export class EmojioneV1BlackMediumSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
