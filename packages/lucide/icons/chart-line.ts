import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChartLineIcon],svg[lucide-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path><svg:path d="m19 9l-5 5l-4-4l-3 3"></svg:path></svg:g>`,
})
export class LucideChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
