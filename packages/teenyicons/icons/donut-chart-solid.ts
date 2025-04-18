import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDonutChartSolidIcon],svg[teenyicons-donut-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7.5A7.5 7.5 0 0 1 7 .016v4.02a3.5 3.5 0 1 0 2.596 6.267l2.842 2.842A7.5 7.5 0 0 1 0 7.5"></svg:path><svg:path fill="currentColor" d="M13.145 12.438A7.47 7.47 0 0 0 15 7.5c0-1.034-.21-2.018-.587-2.914L10.755 6.21a3.5 3.5 0 0 1-.452 3.385zM8 4.035V.016a7.5 7.5 0 0 1 5.963 3.676L10.254 5.34A3.5 3.5 0 0 0 8 4.035"></svg:path>`,
})
export class TeenyiconsDonutChartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
