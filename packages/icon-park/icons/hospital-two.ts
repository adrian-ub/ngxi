import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalTwoIcon],svg[icon-park-hospital-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M32 11H40L44 21H4L8 11H16"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M8 21H40V43H8V21Z"></svg:path><svg:rect width="16" height="16" x="16" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="8" height="14" x="16" y="29" fill="#2F88FF" stroke="#fff"></svg:rect><svg:rect width="8" height="14" x="24" y="29" fill="#2F88FF" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M21 13H27"></svg:path><svg:path stroke="#000" d="M36 43H12"></svg:path><svg:path stroke="#fff" d="M24 16L24 10"></svg:path></svg:g>`,
})
export class IconParkHospitalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
