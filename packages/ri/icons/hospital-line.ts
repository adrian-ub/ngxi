import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHospitalLineIcon],svg[ri-hospital-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-6h8v6h3V4H5v16zm2 0h4v-4h-4zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 8V6h2v2h2v2h-2v2h-2v-2H9V8z"></svg:path>`,
})
export class RiHospitalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
