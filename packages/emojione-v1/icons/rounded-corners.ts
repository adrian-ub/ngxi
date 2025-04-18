import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1RoundedCornersIcon],svg[emojione-v1-rounded-corners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#be1e2d" d="M56.628 62.09H7.288c-2.545 0-4.864-1.352-6.204-3.616c-1.387-2.346-1.445-5.268-.152-7.628l24.664-45.04a7.26 7.26 0 0 1 6.361-3.797c2.64 0 5.079 1.456 6.36 3.799l24.67 45.05c1.311 2.388 1.287 5.146-.055 7.423c-1.241 2.396-3.58 3.818-6.303 3.818m-48.37-7.988h47.4l-23.701-43.28l-23.697 43.28"></svg:path>`,
})
export class EmojioneV1RoundedCornersIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
