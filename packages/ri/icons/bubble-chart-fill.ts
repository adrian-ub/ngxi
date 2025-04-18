import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBubbleChartFillIcon],svg[ri-bubble-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8a4 4 0 0 1 0-8m8.5-10a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11"></svg:path>`,
})
export class RiBubbleChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
