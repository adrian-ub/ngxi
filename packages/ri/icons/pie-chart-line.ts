import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPieChartLineIcon],svg[ri-pie-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.458v2.124A8.003 8.003 0 0 0 12 20a8 8 0 0 0 7.419-5h2.123c-1.274 4.057-5.064 7-9.542 7c-5.523 0-10-4.477-10-10c0-4.478 2.943-8.268 7-9.542M12 2c5.523 0 10 4.477 10 10q0 .507-.05 1H11V2.05Q11.493 2 12 2m1 2.062V11h6.938A8.004 8.004 0 0 0 13 4.062"></svg:path>`,
})
export class RiPieChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
