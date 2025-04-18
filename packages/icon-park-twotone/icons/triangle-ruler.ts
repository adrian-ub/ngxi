import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTriangleRulerIcon],svg[icon-park-twotone-triangle-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipTTriangleRuler0" fill="#555" d="M13 35h12L13 23z"></svg:path><svg:path id="ipTTriangleRuler1" stroke="#fff" d="M13 35h12L13 23z"></svg:path><svg:mask id="ipTTriangleRuler2"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44L4 4v40z"></svg:path><svg:use href="#ipTTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipTTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipTTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipTTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipTTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipTTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipTTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipTTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44v-3m-6 3v-3m-6 3v-3m-6 3v-3m-8-5h3m-3-6h3m-3-6h3m-3-6h3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTriangleRuler2)"></svg:path>`,
})
export class IconParkTwotoneTriangleRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
