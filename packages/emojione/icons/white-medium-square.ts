import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWhiteMediumSquareIcon],svg[emojione-white-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M8 8h48v48H8z"></svg:path>`,
})
export class EmojioneWhiteMediumSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
