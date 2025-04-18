import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGanttChart16RegularIcon],svg[fluent-gantt-chart-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5zM3.5 4A1.5 1.5 0 0 0 2 5.5v5A1.5 1.5 0 0 0 3.5 12H5V7h1v5h4v-1.085q.236.084.5.085h.5v1h1.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4H11v2h-1V4zm0 1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM7 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M10.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentGanttChart16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
