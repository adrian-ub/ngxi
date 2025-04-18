import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicalBoxIcon],svg[icon-park-medical-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 17H7C5.89543 17 5 17.8954 5 19L5.00003 39C5.00003 40.1046 5.89546 41 7.00002 41H41C42.1046 41 43 40.1046 43 39V19C43 17.8954 42.1046 17 41 17Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M34 7H14L14 17H34V7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 29H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V34"></svg:path></svg:g>`,
})
export class IconParkMedicalBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
