import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChartColumnStackedIcon],svg[lucide-chart-column-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 13H7m12-4h-4M3 3v16a2 2 0 0 0 2 2h16"></svg:path><svg:rect width="4" height="12" x="15" y="5" rx="1"></svg:rect><svg:rect width="4" height="9" x="7" y="8" rx="1"></svg:rect></svg:g>`,
})
export class LucideChartColumnStackedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
