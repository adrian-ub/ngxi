import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneTradeMarkIcon],svg[emojione-monotone-trade-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v7.529h10.313V34h7.5V9.529h10.312V2zm52.5 0l-6.562 13.177L41.375 2h-7.5v32h7.5V20.823L47.938 34L54.5 20.823V34H62V2z"></svg:path>`,
})
export class EmojioneMonotoneTradeMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
