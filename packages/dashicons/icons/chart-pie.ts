import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsChartPieIcon],svg[dashicons-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10V3c3.87 0 7 3.13 7 7zM9 4v7h7c0 3.87-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7"></svg:path>`,
})
export class DashiconsChartPieIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
