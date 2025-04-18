import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneHeavyCheckMarkIcon],svg[emojione-heavy-check-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4d5357" d="M56 2L18.8 42.9L8 34.7H2L18.8 62L62 2z"></svg:path>`,
})
export class EmojioneHeavyCheckMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
