import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1JapaneseSymbolForBeginnerIcon],svg[noto-v1-japanese-symbol-for-beginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1JapaneseSymbolForBeginner0" d="M104.27.48c-1.47 0-3.73.47-6.19 2.73l-32.27 29.6c-.9.83-2.72.83-3.62 0L29.92 3.21C27.46.95 25.2.48 23.73.48c-3.46 0-7.18 2.69-7.18 8.61v70.42c0 5.21 2.9 11.78 6.74 15.3l32.26 29.49c2.28 2.08 5.28 3.23 8.46 3.23s6.18-1.14 8.46-3.23l32.25-29.49c3.85-3.52 6.74-10.09 6.74-15.3V9.09c0-5.92-3.73-8.61-7.19-8.61"></svg:path></svg:defs><svg:use fill="#fcc21b" href="#notoV1JapaneseSymbolForBeginner0"></svg:use><svg:clippath id="notoV1JapaneseSymbolForBeginner1"><svg:use href="#notoV1JapaneseSymbolForBeginner0"></svg:use></svg:clippath><svg:g clip-path="url(#notoV1JapaneseSymbolForBeginner1)"><svg:path fill="#757f3f" d="M119.33-23.68L64.27 24.88v116l55.06-48.41z"></svg:path></svg:g>`,
})
export class NotoV1JapaneseSymbolForBeginnerIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
