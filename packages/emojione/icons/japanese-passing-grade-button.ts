import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneJapanesePassingGradeButtonIcon],svg[emojione-japanese-passing-grade-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5a79" d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z"></svg:path><svg:g fill="#fff"><svg:path d="M32 12S22 20.6 9.8 26.6l3.2 6.1s7.9-2.6 19-11.5c11.1 8.9 19 11.5 19 11.5l3.2-6.1C42 20.6 32 12 32 12"></svg:path><svg:path d="M20.9 29.5h22.3v5.1H20.9zM16 36.8V52h32V36.8zm25.6 9.8H22.4v-4.3h19.1z"></svg:path></svg:g>`,
})
export class EmojioneJapanesePassingGradeButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
