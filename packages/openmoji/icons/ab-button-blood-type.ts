import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAbButtonBloodTypeIcon],svg[openmoji-ab-button-blood-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiAbButtonBloodType0" d="M59.035 60.137h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:path id="openmojiAbButtonBloodType1" d="m33.287 43.637l-6.429-15l-6.428 15m2.142-3.591h8.572m15.511-3.909h-5.72v-7.472h5.72a3.736 3.736 0 0 1 3.736 3.736a3.736 3.736 0 0 1-3.736 3.736m0 7.473h-5.72v-7.473h5.72a3.736 3.736 0 0 1 3.736 3.736a3.736 3.736 0 0 1-3.736 3.736"></svg:path></svg:defs><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiAbButtonBloodType0"></svg:use><svg:use href="#openmojiAbButtonBloodType1" stroke-linecap="round"></svg:use></svg:g><svg:path fill="#d22f27" d="M59.035 60.137h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiAbButtonBloodType0"></svg:use><svg:use href="#openmojiAbButtonBloodType1" stroke-linecap="round"></svg:use></svg:g>`,
})
export class OpenmojiAbButtonBloodTypeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
