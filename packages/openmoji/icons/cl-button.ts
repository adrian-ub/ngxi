import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClButtonIcon],svg[openmoji-cl-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiClButton0" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:path id="openmojiClButton1" d="M32.07 42.578a5.3 5.3 0 0 1-3.538 1.343a5.334 5.334 0 0 1-5.334-5.334v-4.268a5.334 5.334 0 0 1 5.334-5.334a5.3 5.3 0 0 1 3.538 1.343m10.331-1.279v14.936h6.401"></svg:path></svg:defs><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiClButton0"></svg:use><svg:use href="#openmojiClButton1" stroke-linecap="round"></svg:use></svg:g><svg:path fill="#d22f27" d="M59.035 60.453h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiClButton0"></svg:use><svg:use href="#openmojiClButton1" stroke-linecap="round"></svg:use></svg:g>`,
})
export class OpenmojiClButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
