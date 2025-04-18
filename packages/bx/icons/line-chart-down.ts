import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLineChartDownIcon],svg[bx-line-chart-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18v-2H5z"></svg:path><svg:path fill="currentColor" d="M13 12.586L8.707 8.293L7.293 9.707L13 15.414l3-3l4.293 4.293l1.414-1.414L16 9.586z"></svg:path>`,
})
export class BxLineChartDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
