import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneJapaneseSymbolForBeginnerIcon],svg[emojione-japanese-symbol-for-beginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#24bac5" d="M32 20.8V62l20-18.8V2z"></svg:path><svg:path fill="#ffce31" d="M12 2v41.2L32 62V20.8z"></svg:path><svg:path fill="none" stroke="#3e4347" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M32 20.8L12 2v41.2L32 62l20-18.8V2z"></svg:path>`,
})
export class EmojioneJapaneseSymbolForBeginnerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
