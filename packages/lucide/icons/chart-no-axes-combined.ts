import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesCombinedIcon],svg[lucide-chart-no-axes-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v5m4-7v7m4-11v11m2-18l-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15m2 3v3m4-7v7"></svg:path>`,
})
export class LucideChartNoAxesCombinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
