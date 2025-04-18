import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownIcon],svg[stash-chart-trend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 8.47a.75.75 0 0 1 1.06 0L15 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0L12 10.06l-4.19 4.19H9.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.69z"></svg:path>`,
})
export class StashChartTrendDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
