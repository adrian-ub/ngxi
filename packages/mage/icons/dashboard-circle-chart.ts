import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCircleChartIcon],svg[mage-dashboard-circle-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7.465 14.72l2.222-2.956a.907.907 0 0 1 1.207-.226l2.167 1.369a.907.907 0 0 0 1.243-.263l2.23-3.365"></svg:path></svg:g>`,
})
export class MageDashboardCircleChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
