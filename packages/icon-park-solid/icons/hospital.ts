import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHospitalIcon],svg[icon-park-solid-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHospital0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M33 5H5v38h28z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 21h10v22H33"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 21h12m-6-6v12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHospital0)"></svg:path>`,
})
export class IconParkSolidHospitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
