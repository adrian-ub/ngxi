import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneCircledMIcon],svg[emojione-circled-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m41 15l-9 9l-9-9h-6v34h6V24l9 9l9-9v25h6V15z"></svg:path>`,
})
export class EmojioneCircledMIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
