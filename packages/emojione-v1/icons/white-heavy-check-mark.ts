import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WhiteHeavyCheckMarkIcon],svg[emojione-v1-white-heavy-check-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37b34a" d="M63.792 56.915a6.876 6.876 0 0 1-6.875 6.876H6.875A6.876 6.876 0 0 1 0 56.915V6.875A6.88 6.88 0 0 1 6.875 0h50.042a6.877 6.877 0 0 1 6.875 6.875z"></svg:path><svg:path fill="#f4f4f4" d="M53.867 14.14a4.656 4.656 0 0 0-6.562.514l-20.04 23.437l-10.781-9a4.248 4.248 0 1 0-5.447 6.519l14.444 12.06a4.22 4.22 0 0 0 3.235.946A4.65 4.65 0 0 0 31.895 47l22.483-26.3a4.66 4.66 0 0 0-.515-6.562"></svg:path>`,
})
export class EmojioneV1WhiteHeavyCheckMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
