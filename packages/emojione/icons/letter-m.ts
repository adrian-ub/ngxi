import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterMIcon],svg[emojione-letter-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M37.3 17.5H46v29h-5.7V22.1l-5.5 24.4H29l-5.5-24.4v24.4H18v-29h8.8l5.3 22.8z"></svg:path>`,
})
export class EmojioneLetterMIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
