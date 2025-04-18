import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyGraphBarProductDataBarsAnalysisAnalyticsGraphBusinessChartIcon],svg[streamline-money-graph-bar-product-data-bars-analysis-analytics-graph-business-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.5h13m-9 0V.5h-4v13m8 0v-7h-4v7m8 0v-10h-4v10"></svg:path>`,
})
export class StreamlineMoneyGraphBarProductDataBarsAnalysisAnalyticsGraphBusinessChartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
