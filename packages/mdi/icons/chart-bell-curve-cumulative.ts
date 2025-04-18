import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartBellCurveCumulativeIcon],svg[mdi-chart-bell-curve-cumulative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v1h18v2H2V2h2v15c3 0 6-2 8.1-5.6c3-5 6.3-7.4 9.9-7.4v2c-2.8 0-5.5 2.1-8.1 6.5C11.3 16.6 7.7 19 4 19"></svg:path>`,
})
export class MdiChartBellCurveCumulativeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
