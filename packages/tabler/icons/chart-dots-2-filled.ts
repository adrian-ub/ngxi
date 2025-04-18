import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartDots2FilledIcon],svg[tabler-chart-dots-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993.883L22 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m18.97.757a1 1 0 0 1-.727 1.213l-5.256 1.314a3 3 0 0 1-.55 1.465l1.768 2.358A3.003 3.003 0 0 1 21 12a3 3 0 0 1-5.436 1.751l-3.57 1.428A3 3 0 0 1 6 15l.005-.176a3 3 0 0 1 5.43-1.576l3.57-1.428l.015-.17c.06-.518.253-.996.542-1.4l-1.767-2.357A3.003 3.003 0 0 1 10 5l.005-.176a3 3 0 0 1 5.497-1.48l5.255-1.314a1 1 0 0 1 1.213.727"></svg:path>`,
})
export class TablerChartDots2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
