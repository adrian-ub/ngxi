import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elMapMarkerIcon],svg[el-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C350.178 0 147.656 202.521 147.656 452.344c0 83.547 16.353 169.837 63.281 232.031L600 1200l389.062-515.625c42.625-56.49 63.281-156.356 63.281-232.031C1052.344 202.521 849.822 0 600 0m0 261.987c105.116 0 190.356 85.241 190.356 190.356C790.356 557.46 705.116 642.7 600 642.7s-190.356-85.24-190.356-190.356S494.884 261.987 600 261.987"></svg:path>`,
})
export class ElMapMarkerIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
