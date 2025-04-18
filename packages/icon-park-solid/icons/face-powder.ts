import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFacePowderIcon],svg[icon-park-solid-face-powder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFacePowder0"><svg:g fill="none"><svg:ellipse cx="24" cy="30" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="16" ry="6"></svg:ellipse><svg:ellipse cx="24" cy="14" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="16" ry="10"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m23 10l-5 3m12 1l-5 3"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 38c0 3.314-7.163 6-16 6S8 41.314 8 38m32 0v-8M8 38v-8"></svg:path><svg:ellipse cx="24" cy="30" fill="#000" rx="7" ry="2"></svg:ellipse></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFacePowder0)"></svg:path>`,
})
export class IconParkSolidFacePowderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
