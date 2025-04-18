import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiJapaneseSymbolForBeginnerIcon],svg[twemoji-japanese-symbol-for-beginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="M17 36a2 2 0 0 1-1.414-.586l-11-11A2 2 0 0 1 4 23V2A2 2 0 0 1 7.414.586L17 10.171L26.586.586A1.998 1.998 0 0 1 30 2v21a2 2 0 0 1-.586 1.414l-11 11A2 2 0 0 1 17 36"></svg:path><svg:path fill="#47DED4" d="M17 13L28 2v21L17 34z"></svg:path><svg:path fill="#FFFF87" d="m6 2l11 11v21L6 23z"></svg:path>`,
})
export class TwemojiJapaneseSymbolForBeginnerIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
