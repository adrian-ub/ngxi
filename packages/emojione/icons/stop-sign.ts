import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneStopSignIcon],svg[emojione-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e9edf2" d="M64 45.3L45.3 64H18.7L0 45.3V18.7L18.7 0h26.6L64 18.7z"></svg:path><svg:path fill="#ed4c5c" d="M58 42.8L42.8 58H21.2L6 42.8V21.2L21.2 6h21.6L58 21.2z"></svg:path>`,
})
export class EmojioneStopSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
