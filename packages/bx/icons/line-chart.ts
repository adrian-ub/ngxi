import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLineChartIcon],svg[bx-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3z"></svg:path><svg:path fill="currentColor" d="M15.293 14.707a1 1 0 0 0 1.414 0l5-5l-1.414-1.414L16 12.586l-2.293-2.293a1 1 0 0 0-1.414 0l-5 5l1.414 1.414L13 12.414z"></svg:path>`,
})
export class BxLineChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
