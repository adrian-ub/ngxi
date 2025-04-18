import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDoughnutChartIcon],svg[flat-color-icons-doughnut-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M24 30c-3.3 0-6-2.7-6-6s2.7-6 6-6V5C13.5 5 5 13.5 5 24s8.5 19 19 19c4.4 0 8.5-1.5 11.8-4.1l-8-10.2c-1.1.8-2.4 1.3-3.8 1.3"></svg:path><svg:path fill="#448AFF" d="M30 24h13c0-10.5-8.5-19-19-19v13c3.3 0 6 2.7 6 6"></svg:path><svg:path fill="#3F51B5" d="M43 24H30c0 1.9-.9 3.6-2.3 4.7l8 10.2C40.2 35.4 43 30 43 24"></svg:path>`,
})
export class FlatColorIconsDoughnutChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
