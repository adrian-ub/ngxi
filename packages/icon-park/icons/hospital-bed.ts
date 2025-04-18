import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalBedIcon],svg[icon-park-hospital-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 17V39"></svg:path><svg:path d="M42 25L42 39"></svg:path><svg:path d="M26 15H38"></svg:path><svg:path d="M11 22H17"></svg:path><svg:path d="M6 28L42 28"></svg:path><svg:path d="M6 34L42 34"></svg:path><svg:path d="M32 9V21"></svg:path></svg:g>`,
})
export class IconParkHospitalBedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
