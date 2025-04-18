import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ReverseButtonIcon],svg[emojione-v1-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M63.998 57.12a6.877 6.877 0 0 1-6.876 6.882H7.082A6.88 6.88 0 0 1 .208 57.12V7.08A6.876 6.876 0 0 1 7.082.203h50.04c3.8 0 6.876 3.08 6.876 6.877z"></svg:path><svg:path fill="#fff" d="M42.736 52.21c2.843-.191 5.216-1.435 6.257-3.135V15.138c-1.045-1.705-3.428-2.947-6.272-3.135L15.21 32.033l27.526 20.17"></svg:path>`,
})
export class EmojioneV1ReverseButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
