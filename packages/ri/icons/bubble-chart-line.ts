import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBubbleChartLineIcon],svg[ri-bubble-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8a4 4 0 0 1 0-8m10 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8.5-12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class RiBubbleChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
