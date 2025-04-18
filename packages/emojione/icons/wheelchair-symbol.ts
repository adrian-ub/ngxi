import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWheelchairSymbolIcon],svg[emojione-wheelchair-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:g fill="#fff"><svg:path d="m48.7 43l-2.5 2.7l-6-9.2H33v-4.1h8v-4.2h-8V20h-4v20.6h9.1L45.5 52l5.5-5.6z"></svg:path><svg:circle cx="31" cy="13" r="4"></svg:circle><svg:path d="M29.4 48.9c-4.5 0-8.2-3.7-8.2-8.2c0-3 1.7-5.7 4.1-7.1V29c-4.8 1.7-8.2 6.3-8.2 11.6C17 47.5 22.6 53 29.4 53c3.9 0 7.4-1.8 9.6-4.6l-2.5-3.7c-1.4 2.5-4.1 4.2-7.1 4.2"></svg:path></svg:g>`,
})
export class EmojioneWheelchairSymbolIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
