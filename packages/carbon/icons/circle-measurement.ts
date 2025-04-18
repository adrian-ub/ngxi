import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCircleMeasurementIcon],svg[carbon-circle-measurement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z" fill="currentColor"></svg:path><svg:path d="M21 12.41V16h2V9h-7v2h3.59L11 19.59V16H9v7h7v-2h-3.59z" fill="currentColor"></svg:path>`,
})
export class CarbonCircleMeasurementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
