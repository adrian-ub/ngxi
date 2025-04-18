import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartPieOutlineIcon],svg[healthicons-chart-pie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24M23 6.027C13.524 6.547 6 14.394 6 24c0 2.922.696 5.682 1.932 8.122L23 23.422zm16.066 8.12C36.022 9.502 30.888 6.35 25 6.027v16.241zM24 42c-6.304 0-11.851-3.24-15.066-8.147l31.134-17.975A17.9 17.9 0 0 1 42 24c0 9.941-8.059 18-18 18" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsChartPieOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
