import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxScatterChartIcon],svg[bx-scatter-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1"></svg:path><svg:circle cx="10" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="6.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxScatterChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
