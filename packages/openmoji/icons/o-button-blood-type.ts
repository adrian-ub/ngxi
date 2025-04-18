import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOButtonBloodTypeIcon],svg[openmoji-o-button-blood-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiOButtonBloodType0" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:path id="openmojiOButtonBloodType1" d="M35.75 46.512a7.857 7.857 0 0 1-7.857-7.857v-6.286a7.857 7.857 0 0 1 7.857-7.857a7.857 7.857 0 0 1 7.857 7.857v6.286a7.857 7.857 0 0 1-7.857 7.857"></svg:path></svg:defs><svg:g fill="none" stroke="#000" stroke-width="2"><svg:use href="#openmojiOButtonBloodType0" stroke-miterlimit="10"></svg:use><svg:use href="#openmojiOButtonBloodType1" stroke-linecap="round" stroke-linejoin="round"></svg:use></svg:g><svg:path fill="#d22f27" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:use href="#openmojiOButtonBloodType0" stroke-miterlimit="10"></svg:use><svg:use href="#openmojiOButtonBloodType1" stroke-linecap="round" stroke-linejoin="round"></svg:use></svg:g>`,
})
export class OpenmojiOButtonBloodTypeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
