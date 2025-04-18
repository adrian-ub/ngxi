import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCircleChartFillIcon],svg[mage-dashboard-circle-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.16 8l-2.23 3.36a1.65 1.65 0 0 1-1 .71a1.62 1.62 0 0 1-1.23-.23l-2.17-1.37a.2.2 0 0 0-.11 0a.11.11 0 0 0-.09.06l-2.23 3a.73.73 0 0 1-.6.3a.8.8 0 0 1-.45-.15a.75.75 0 0 1-.14-1.05l2.22-2.95c.243-.33.6-.557 1-.64a1.7 1.7 0 0 1 1.18.22l2.17 1.38a.17.17 0 0 0 .12 0a.14.14 0 0 0 .1-.07l2.23-3.36a.75.75 0 0 1 1.25.83z"></svg:path>`,
})
export class MageDashboardCircleChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
