import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRedTrianglePointedUpIcon],svg[emojione-red-triangle-pointed-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 2L2 62h60z"></svg:path>`,
})
export class EmojioneRedTrianglePointedUpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
