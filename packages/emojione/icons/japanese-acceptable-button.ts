import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneJapaneseAcceptableButtonIcon],svg[emojione-japanese-acceptable-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#eda454" d="M62 32c0 16.5-13.5 30-30 30S2 48.5 2 32S15.5 2 32 2s30 13.5 30 30"></svg:path><svg:g fill="#fff"><svg:path d="M48 18v4.9h-3.6v21.3c0 2.7-.5 4.1-2.4 5c-1.8.8-4.5.9-8.3.9c-.2-1.5-1-3.7-1.7-5.1c2.6.2 5.4.2 6.2.1c.8 0 1.1-.3 1.1-1V22.9H16V18z"></svg:path><svg:path d="M19 26.5v17h4.6v-2.7H35V26.5zm11.1 9.9h-6.4v-5.5h6.4z"></svg:path></svg:g>`,
})
export class EmojioneJapaneseAcceptableButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
