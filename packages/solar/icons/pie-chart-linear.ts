import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPieChartLinearIcon],svg[solar-pie-chart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 15.552A9.215 9.215 0 0 1 11.21 22A9.21 9.21 0 0 1 2 12.79A9.215 9.215 0 0 1 8.448 4"></svg:path><svg:path d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"></svg:path></svg:g>`,
})
export class SolarPieChartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
