import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1DisappointedFaceIcon],svg[emojione-v1-disappointed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbbf67" d="M63.958 31.979c0 17.665-14.314 31.979-31.979 31.979S0 49.644 0 31.979S14.315 0 31.979 0s31.979 14.315 31.979 31.979"></svg:path><svg:path fill="#633d19" d="M41.4 52.06c-.225 0-4.333-1.576-8.48-1.576c-3.705 0-7.441 1.576-8.48 1.576c-.9 0-1.236-1.043-.691-1.667c4.961-5.728 13.379-5.728 18.344 0c.539.624.203 1.667-.693 1.667M54.832 40.1c-1 2.991-3.919-1.715-7.487-2.907c-3.567-1.193-8.729.812-7.729-2.183c.999-2.992 6.122-4.876 9.691-3.684c3.567 1.193 6.526 5.779 5.525 8.774m-44.792 0c1 2.991 3.918-1.715 7.487-2.907c3.567-1.193 8.729.812 7.728-2.183c-.999-2.992-6.122-4.876-9.691-3.684c-3.567 1.193-6.525 5.779-5.524 8.774"></svg:path>`,
})
export class EmojioneV1DisappointedFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
