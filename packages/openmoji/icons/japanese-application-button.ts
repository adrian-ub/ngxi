import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseApplicationButtonIcon],svg[openmoji-japanese-application-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g stroke="#000" stroke-width="2"><svg:path fill="none" stroke-miterlimit="10" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M25.5 41.5h21m0-8h-21m22 10v-17h-23v17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36.5 21.5v30"></svg:path></svg:g>`,
})
export class OpenmojiJapaneseApplicationButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
