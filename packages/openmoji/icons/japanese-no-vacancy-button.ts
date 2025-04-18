import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseNoVacancyButtonIcon],svg[openmoji-japanese-no-vacancy-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiJapaneseNoVacancyButton0" d="m20.95 21.5l3 3m-4 5l3 3m4.1-8.5h23m-16-3v8m10-8v8m-18 1h26m-12.997 1v14h5v-5m-10 0v7m4.997-2h-4m-11-5s-1 7-4 9"></svg:path><svg:path id="openmojiJapaneseNoVacancyButton1" d="M28.053 51V35h21v15h-5"></svg:path></svg:defs><svg:path fill="#ea5a47" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:use href="#openmojiJapaneseNoVacancyButton0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#openmojiJapaneseNoVacancyButton1" stroke-linecap="round" stroke-linejoin="round"></svg:use></svg:g><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiJapaneseNoVacancyButton0"></svg:use><svg:use href="#openmojiJapaneseNoVacancyButton1"></svg:use></svg:g>`,
})
export class OpenmojiJapaneseNoVacancyButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
