import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCylinderIcon],svg[icon-park-outline-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 10c0 3.314-8.954 6-20 6S4 13.314 4 10s8.954-6 20-6s20 2.686 20 6m0 28c0 3.314-8.954 6-20 6S4 41.314 4 38s8.954-6 20-6s20 2.686 20 6m0-28v28M4 10v28"></svg:path>`,
})
export class IconParkOutlineCylinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
