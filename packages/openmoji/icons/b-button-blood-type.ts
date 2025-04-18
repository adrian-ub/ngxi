import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBButtonBloodTypeIcon],svg[openmoji-b-button-blood-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiBButtonBloodType0" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:path id="openmojiBButtonBloodType1" d="M37.763 35.228h-8.42v-11h8.42a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5m0 11h-8.42v-11h8.42a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5"></svg:path></svg:defs><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiBButtonBloodType0"></svg:use><svg:use href="#openmojiBButtonBloodType1" stroke-linecap="round"></svg:use></svg:g><svg:path fill="#d22f27" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiBButtonBloodType0"></svg:use><svg:use href="#openmojiBButtonBloodType1" stroke-linecap="round"></svg:use></svg:g>`,
})
export class OpenmojiBButtonBloodTypeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
