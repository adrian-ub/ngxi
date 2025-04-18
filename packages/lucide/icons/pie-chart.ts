import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePieChartIcon],svg[lucide-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21.21 15.89A10 10 0 1 1 8 2.83"></svg:path><svg:path d="M22 12A10 10 0 0 0 12 2v10z"></svg:path></svg:g>`,
})
export class LucidePieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
