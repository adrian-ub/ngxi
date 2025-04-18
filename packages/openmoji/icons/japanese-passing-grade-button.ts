import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapanesePassingGradeButtonIcon],svg[openmoji-japanese-passing-grade-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiJapanesePassingGradeButton0" d="M20 31c7 0 15-11 15-11s9.5 10.5 15.5 11.5m-22-1h14m-17 20v-13h20v13m-19-2h19"></svg:path></svg:defs><svg:path fill="#ea5a47" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:use href="#openmojiJapanesePassingGradeButton0" stroke-linecap="round" stroke-linejoin="round"></svg:use></svg:g><svg:use href="#openmojiJapanesePassingGradeButton0" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:use>`,
})
export class OpenmojiJapanesePassingGradeButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
