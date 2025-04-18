import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChartIcon],svg[streamline-interface-content-chart-product-data-analysis-analytics-graph-line-business-board-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M3 3h2M3 5.5h4.5m4 0l-3 5l-3.5-2l-2 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
