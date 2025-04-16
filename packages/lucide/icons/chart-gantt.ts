import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChartGanttIcon],svg[lucide-chart-gantt-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h8m-6 10h6M3 3v16a2 2 0 0 0 2 2h16M8 11h7"></svg:path>`,
})
export class LucideChartGanttIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
