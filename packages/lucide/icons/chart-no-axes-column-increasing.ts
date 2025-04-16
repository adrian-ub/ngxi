import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesColumnIncreasingIcon],svg[lucide-chart-no-axes-column-increasing-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V10m6 10V4M6 20v-4"></svg:path>`,
})
export class LucideChartNoAxesColumnIncreasingIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
