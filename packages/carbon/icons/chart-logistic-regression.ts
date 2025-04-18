import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartLogisticRegressionIcon],svg[carbon-chart-logistic-regression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="8" cy="6" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8.234 24a8.99 8.99 0 0 0 8.538-6.154l2.353-7.06A6.99 6.99 0 0 1 25.766 6H30V4h-4.234a8.99 8.99 0 0 0-8.538 6.154l-2.353 7.06A6.99 6.99 0 0 1 8.234 22H4V2H2v26c0 1.103.897 2 2 2h26v-2H4v-4z"></svg:path>`,
})
export class CarbonChartLogisticRegressionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
