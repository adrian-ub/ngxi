import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChartSplineIcon],svg[lucide-chart-spline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path><svg:path d="M7 16c.5-2 1.5-7 4-7c2 0 2 3 4 3c2.5 0 4.5-5 5-7"></svg:path></svg:g>`,
})
export class LucideChartSplineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
