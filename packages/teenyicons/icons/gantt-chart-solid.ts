import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGanttChartSolidIcon],svg[teenyicons-gantt-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h1v14h14v1H0zm2 2h3v1H2zm1 3h5v1H3zm2 3h3v1H5zm3 3h7v1H8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGanttChartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
