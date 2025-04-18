import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoughnutChartLightIcon],svg[lets-icons-doughnut-chart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path stroke-linecap="round" d="M12 3v4.5M18 18l-3-3m3-9l-3 3M3 12h4.5"></svg:path></svg:g>`,
})
export class LetsIconsDoughnutChartLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
