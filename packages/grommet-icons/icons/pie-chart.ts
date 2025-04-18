import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPieChartIcon],svg[grommet-icons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M10 23a9 9 0 0 1 0-18v9l1.162 1.162l5.202 5.202A8.97 8.97 0 0 1 10 23Zm4-13V1a9 9 0 0 1 9 9zm0 3h8a8.96 8.96 0 0 1-2.107 5.787z"></svg:path>`,
})
export class GrommetIconsPieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
