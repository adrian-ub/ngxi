import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1RedTrianglePointedDownIcon],svg[emojione-v1-red-triangle-pointed-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M1.543 9.192c9.107 16.636 18.215 33.26 27.32 49.898a3.575 3.575 0 0 0 6.327 0c9.108-16.636 18.215-33.26 27.32-49.898c1.409-2.571-.387-5.902-3.163-5.902H4.698c-1.54 0-2.571.828-3.111 1.949c-.676 1.068-.859 2.488-.052 3.953"></svg:path>`,
})
export class EmojioneV1RedTrianglePointedDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
