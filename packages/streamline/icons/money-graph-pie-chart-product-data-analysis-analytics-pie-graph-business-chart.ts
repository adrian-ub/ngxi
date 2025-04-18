import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyGraphPieChartProductDataAnalysisAnalyticsPieGraphBusinessChartIcon],svg[streamline-money-graph-pie-chart-product-data-analysis-analytics-pie-graph-business-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 .5V7l4.6 4.6"></svg:path></svg:g>`,
})
export class StreamlineMoneyGraphPieChartProductDataAnalysisAnalyticsPieGraphBusinessChartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
