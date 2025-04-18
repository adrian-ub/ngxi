import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartGanttIcon],svg[mdi-chart-gantt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h8V2h2v20h-2v-4H6v-3h4v-2H4v-3h6V8H2zm12 0h3v3h-3zm0 5h5v3h-5zm0 5h8v3h-8z"></svg:path>`,
})
export class MdiChartGanttIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
