import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBlackMediumSmallSquareIcon],svg[emojione-black-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#333" d="M12 12h40v40H12z"></svg:path>`,
})
export class EmojioneBlackMediumSmallSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
