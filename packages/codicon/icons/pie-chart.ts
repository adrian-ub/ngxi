import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPieChartIcon],svg[codicon-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6h3.9A5.01 5.01 0 0 0 10 2.1zm0-4.917A6.005 6.005 0 0 1 15 7H9V1q.511 0 1 .083M7 8l1 1h4.9A5.002 5.002 0 0 1 3 8a5 5 0 0 1 4-4.9zm1 6a6 6 0 0 0 6-6H8V2q-.511 0-1 .083A6.002 6.002 0 0 0 8 14" clip-rule="evenodd"></svg:path>`,
})
export class CodiconPieChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
