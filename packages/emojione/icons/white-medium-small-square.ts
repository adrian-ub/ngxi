import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWhiteMediumSmallSquareIcon],svg[emojione-white-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M12 12h40v40H12z"></svg:path>`,
})
export class EmojioneWhiteMediumSmallSquareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
