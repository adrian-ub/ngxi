import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1UpLeftArrowIcon],svg[emojione-v1-up-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M63.873 56.802a6.863 6.863 0 0 1-6.862 6.868H7.067a6.864 6.864 0 0 1-6.86-6.868V6.864A6.863 6.863 0 0 1 7.067 0H57.01a6.86 6.86 0 0 1 6.862 6.864z"></svg:path><svg:path fill="#fff" d="m16.264 40.451l-2.192-24.21l24.2 1.263c1.705 1.917 1.964 4.541.519 6.05l-2.452 2.556l11.997 11.506a5.07 5.07 0 0 1 .15 7.166l-4.552 4.743a5.067 5.067 0 0 1-7.165.146L24.775 38.164l-2.45 2.554c-1.444 1.502-4.068 1.359-6.06-.262"></svg:path>`,
})
export class EmojioneV1UpLeftArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
