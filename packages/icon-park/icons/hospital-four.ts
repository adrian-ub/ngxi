import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalFourIcon],svg[icon-park-hospital-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V42H6C4.89543 42 4 41.1046 4 40V8Z"></svg:path><svg:path stroke="#fff" d="M21 42V33C21 31.3431 19.6569 30 18 30H14C12.3431 30 11 31.3431 11 33V42"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M28 24H42C43.1046 24 44 24.8954 44 26V40C44 41.1046 43.1046 42 42 42H28V24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 18H20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 30H38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 36H38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 14V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 42H25"></svg:path></svg:g>`,
})
export class IconParkHospitalFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
