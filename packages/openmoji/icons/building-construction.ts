import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBuildingConstructionIcon],svg[openmoji-building-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiBuildingConstruction0" d="M58 25.833L12 27v-7l46 1.167z"></svg:path></svg:defs><svg:path fill="#FCEA2B" d="M58 25.833L12 27v-7l46 1.167z"></svg:path><svg:path fill="#FCEA2B" d="M28 59H18l2-46h6z"></svg:path><svg:path fill="#D0CFCE" d="M40.5 37h19v4h-19z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiBuildingConstruction0"></svg:use><svg:path d="M28 59H18l2-46h6zm-9-9h8m-8-9h8m-7.5-7h7m7.5-8v-5m8 5v-5m8 16V21m-9.5 16h19v4h-19z"></svg:path><svg:use href="#openmojiBuildingConstruction0"></svg:use></svg:g>`,
})
export class OpenmojiBuildingConstructionIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
