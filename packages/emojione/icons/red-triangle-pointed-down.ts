import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRedTrianglePointedDownIcon],svg[emojione-red-triangle-pointed-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 62L62 2H2z"></svg:path>`,
})
export class EmojioneRedTrianglePointedDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
