import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTriangleRulerIcon],svg[icon-park-outline-triangle-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipOTriangleRuler0" d="M13 35h12L13 23z"></svg:path><svg:path id="ipOTriangleRuler1" stroke="currentColor" d="M13 35h12L13 23z"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44L4 4v40z"></svg:path><svg:use href="#ipOTriangleRuler0" clip-rule="evenodd"></svg:use><svg:use href="#ipOTriangleRuler0" clip-rule="evenodd"></svg:use><svg:use href="#ipOTriangleRuler0" clip-rule="evenodd"></svg:use><svg:use href="#ipOTriangleRuler0" clip-rule="evenodd"></svg:use><svg:use href="#ipOTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipOTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipOTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipOTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44v-3m-6 3v-3m-6 3v-3m-6 3v-3m-8-5h3m-3-6h3m-3-6h3m-3-6h3"></svg:path></svg:g>`,
})
export class IconParkOutlineTriangleRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
