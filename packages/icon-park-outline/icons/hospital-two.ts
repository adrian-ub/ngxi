import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHospitalTwoIcon],svg[icon-park-outline-hospital-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 11h8l4 10H4l4-10h8M8 21h32v22H8z"></svg:path><svg:path d="M16 5h16v16H16zm0 24h8v14h-8zm8 0h8v14h-8zm-3-16h6m9 30H12m12-27v-6"></svg:path></svg:g>`,
})
export class IconParkOutlineHospitalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
