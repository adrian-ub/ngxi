import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileChartPieIcon],svg[lucide-file-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5m.017 4.012a6 6 0 1 0 8.466 8.475"></svg:path><svg:path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"></svg:path></svg:g>`,
})
export class LucideFileChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
