import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashboardChartArrowIcon],svg[mage-dashboard-chart-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14.844l2.322-3.09a.95.95 0 0 1 .588-.36a.95.95 0 0 1 .673.123l2.265 1.43c.21.132.46.176.702.124a.95.95 0 0 0 .597-.398l2.332-3.517"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13.683 9.678l2.796-.522l.521 2.797"></svg:path></svg:g>`,
})
export class MageDashboardChartArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
