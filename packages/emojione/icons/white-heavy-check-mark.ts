import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWhiteHeavyCheckMarkIcon],svg[emojione-white-heavy-check-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4bd37b"></svg:circle><svg:path fill="#fff" d="M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z"></svg:path>`,
})
export class EmojioneWhiteHeavyCheckMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
