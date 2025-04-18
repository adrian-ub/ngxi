import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAnalyticsIcon],svg[tdesign-chart-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm12 4h6v6h-2V9.423l-1.579 1.575l-2.714 2.708l-.707.707l-4-4l-5 5L4.586 14L11 7.585l4 4l2.009-2.003L18.594 8H16z"></svg:path>`,
})
export class TdesignChartAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
