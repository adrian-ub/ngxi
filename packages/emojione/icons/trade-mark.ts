import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneTradeMarkIcon],svg[emojione-trade-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4d5357" d="M2 2v7.5h10.3V34h7.5V9.5h10.3V2zm52.5 0l-6.6 13.2L41.4 2h-7.5v32h7.5V20.8L47.9 34l6.6-13.2V34H62V2z"></svg:path>`,
})
export class EmojioneTradeMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
