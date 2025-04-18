import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneJapaneseHereButtonIcon],svg[emojione-japanese-here-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fd1d9" d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z"></svg:path><svg:path fill="#fff" d="M14.1 47v-6.4h10.3V23.2H14.1V17H30v30zm20 0v-6.4h10.3V23.2H34.1V17H50v30z"></svg:path>`,
})
export class EmojioneJapaneseHereButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
