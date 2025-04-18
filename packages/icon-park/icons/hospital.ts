import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalIcon],svg[icon-park-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M33 5H5V43H33V5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 21H43V43H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 21H25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 15V27"></svg:path></svg:g>`,
})
export class IconParkHospitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
