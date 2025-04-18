import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiChartDonutIcon],svg[zmdi-chart-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 4q81 8 136.5 68.5T427 216q0 45-19 87l-56-33q11-27 11-54q0-56-37-98t-91-50zm-22 361q72 0 117-56l55 33q-30 41-75 64t-97 23q-88 0-150.5-62.5T0 216q0-83 55.5-143.5T192 4v64q-55 8-91.5 50T64 216q0 62 43.5 105.5T213 365"></svg:path>`,
})
export class ZmdiChartDonutIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
