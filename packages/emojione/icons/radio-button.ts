import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRadioButtonIcon],svg[emojione-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="31" r="30" fill="#94989b"></svg:circle><svg:circle cx="32" cy="32" r="15" fill="#626a6d"></svg:circle><svg:circle cx="32" cy="30.4" r="15" fill="#d9e3e8"></svg:circle>`,
})
export class EmojioneRadioButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
