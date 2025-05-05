import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHospitalIcon],svg[picon-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V5h1V4h2v1h1v1H5v1H3V6M0 3l4-2l4 2V2L4 0L0 2m0 6h8V4L4 2L0 4"></svg:path>`,
})
export class PiconHospitalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
