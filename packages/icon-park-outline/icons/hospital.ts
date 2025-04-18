import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHospitalIcon],svg[icon-park-outline-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M33 5H5v38h28z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 21h10v22H33"></svg:path><svg:path stroke-linecap="round" d="M13 21h12m-6-6v12"></svg:path></svg:g>`,
})
export class IconParkOutlineHospitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
