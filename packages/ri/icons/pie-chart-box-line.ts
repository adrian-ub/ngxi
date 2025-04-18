import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPieChartBoxLineIcon],svg[ri-pie-chart-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm12.9 8A5.002 5.002 0 0 1 7 12a5 5 0 0 1 4-4.9V13zm0-2H13V7.1a5.01 5.01 0 0 1 3.9 3.9"></svg:path>`,
})
export class RiPieChartBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
