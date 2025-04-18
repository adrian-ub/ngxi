import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPieChartBoxFillIcon],svg[ri-pie-chart-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13.9 10H11V7.1a5.002 5.002 0 0 0 1 9.9a5 5 0 0 0 4.9-4m0-2A5.01 5.01 0 0 0 13 7.1V11z"></svg:path>`,
})
export class RiPieChartBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
