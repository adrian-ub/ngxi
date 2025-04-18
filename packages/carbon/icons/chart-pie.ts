import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartPieIcon],svg[carbon-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a12 12 0 1 0 12 12A12 12 0 0 0 16 4m10 11h-9V6.05A10 10 0 0 1 26 15M15.42 26A10 10 0 0 1 15 6.05v9a2 2 0 0 0 2 2h9A10 10 0 0 1 15.42 26"></svg:path>`,
})
export class CarbonChartPieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
