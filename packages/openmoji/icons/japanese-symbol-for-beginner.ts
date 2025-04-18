import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseSymbolForBeginnerIcon],svg[openmoji-japanese-symbol-for-beginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="m17 12.007l-1 36l19 16v-40z"></svg:path><svg:path fill="#5c9e31" d="m55 12.007l1 36l-19 16v-40z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M17.677 12.097c-.922-.6-1.677-.19-1.677.91v34a4.74 4.74 0 0 0 1.56 3.252l16.819 13.496a2.62 2.62 0 0 0 3.123.005l16.934-13.506A4.72 4.72 0 0 0 56 47.007v-34c0-1.1-.755-1.51-1.677-.91l-16.646 10.82a3.35 3.35 0 0 1-3.354 0ZM36 24.007v40"></svg:path>`,
})
export class OpenmojiJapaneseSymbolForBeginnerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
