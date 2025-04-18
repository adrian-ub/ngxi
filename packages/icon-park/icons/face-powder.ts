import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFacePowderIcon],svg[icon-park-face-powder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="24" cy="30" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="16" ry="6"></svg:ellipse><svg:ellipse cx="24" cy="14" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="16" ry="10"></svg:ellipse><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 10L18 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 14L25 17"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 38C40 41.3137 32.8366 44 24 44C15.1634 44 8 41.3137 8 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 38V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 38V30"></svg:path><svg:ellipse cx="24" cy="30" fill="#fff" rx="7" ry="2"></svg:ellipse></svg:g>`,
})
export class IconParkFacePowderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
