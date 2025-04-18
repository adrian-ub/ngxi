import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHospitalTwoIcon],svg[icon-park-solid-hospital-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHospitalTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M32 11h8l4 10H4l4-10h8"></svg:path><svg:path fill="#fff" stroke="#fff" d="M8 21h32v22H8zm8-16h16v16H16z"></svg:path><svg:path fill="#fff" stroke="#000" d="M16 29h8v14h-8zm8 0h8v14h-8z"></svg:path><svg:path stroke="#000" d="M21 13h6"></svg:path><svg:path stroke="#fff" d="M36 43H12"></svg:path><svg:path stroke="#000" d="M24 16v-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHospitalTwo0)"></svg:path>`,
})
export class IconParkSolidHospitalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
