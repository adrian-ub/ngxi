import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartBarLineIcon],svg[hugeicons-chart-bar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 15v4m8-10v10m10 3H2m18-9v6M5.6 8.8a2 2 0 1 0-3.2 2.4a2 2 0 0 0 3.2-2.4m0 0l4.8-3.6m0 0a2 2 0 0 0 3.39-.305M10.4 5.2a2 2 0 1 1 3.39-.305m0 0l4.42 2.21m0 0a2 2 0 1 0 3.578 1.79a2 2 0 0 0-3.577-1.79" color="currentColor"></svg:path>`,
})
export class HugeiconsChartBarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
