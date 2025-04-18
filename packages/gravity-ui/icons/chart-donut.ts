import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartDonutIcon],svg[gravity-ui-chart-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.111 2.18a7 7 0 1 1 7.778 11.64A7 7 0 0 1 4.111 2.18M8 6.02a1.98 1.98 0 1 0 0 3.96a1.98 1.98 0 0 0 0-3.96m-.75-3.469a5.5 5.5 0 1 0 6.199 6.199h-2.05a3.481 3.481 0 0 1-5.86 1.71A3.48 3.48 0 0 1 7.25 4.603zm1.5 0v2.05a3.48 3.48 0 0 1 2.648 2.649h2.05A5.5 5.5 0 0 0 8.75 2.551" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChartDonutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
