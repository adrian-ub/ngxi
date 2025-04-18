import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartPieFilledIcon],svg[tabler-chart-pie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025.167L12 4v7a1 1 0 0 0 .883.993L13 12h6.8a2 2 0 0 1 2 2a1 1 0 0 1-.026.226A10 10 0 1 1 9.504 2.293l.27-.067z"></svg:path><svg:path d="M14 3.5V9a1 1 0 0 0 1 1h5.5a1 1 0 0 0 .943-1.332a10 10 0 0 0-6.11-6.111A1 1 0 0 0 14 3.5"></svg:path></svg:g>`,
})
export class TablerChartPieFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
