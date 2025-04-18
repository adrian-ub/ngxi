import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartDotsFilledIcon],svg[tabler-chart-dots-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993.883L22 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"></svg:path><svg:path d="M19 4a3 3 0 1 1-.651 5.93l-2.002 3.202a3 3 0 1 1-4.927.337l-1.378-1.655a3 3 0 1 1 1.538-1.282l1.378 1.654a3 3 0 0 1 1.693-.115l2.002-3.203A3 3 0 0 1 19 4"></svg:path></svg:g>`,
})
export class TablerChartDotsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
