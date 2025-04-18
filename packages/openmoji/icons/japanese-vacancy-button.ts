import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseVacancyButtonIcon],svg[openmoji-japanese-vacancy-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 30v-4h25v4m-12.5-7.5V26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31.5 26.5s2 8-9 10M38.34 26l.16 8.5h5.586a3.4 3.4 0 0 0 2.414-1h0M25 41h21m-10.5.5v8h-13m27 0h-14"></svg:path></svg:g>`,
})
export class OpenmojiJapaneseVacancyButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
