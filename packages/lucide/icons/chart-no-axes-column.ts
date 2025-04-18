import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesColumnIcon],svg[lucide-chart-no-axes-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 20V10m-6 10V4M6 20v-6"></svg:path>`,
})
export class LucideChartNoAxesColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
