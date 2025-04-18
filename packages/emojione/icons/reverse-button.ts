import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneReverseButtonIcon],svg[emojione-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M38 12L18 32l20 20z"></svg:path>`,
})
export class EmojioneReverseButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
