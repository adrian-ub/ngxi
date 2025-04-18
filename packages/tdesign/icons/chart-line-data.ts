import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartLineDataIcon],svg[tdesign-chart-line-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm15.5 5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 1.026 2.02l-8.041 4.696a2.5 2.5 0 1 1-1.003-1.73l8.035-4.693A3 3 0 0 1 17 7.5m-9.067 6.75a.5.5 0 1 0-.866.5a.5.5 0 0 0 .866-.5"></svg:path>`,
})
export class TdesignChartLineDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
