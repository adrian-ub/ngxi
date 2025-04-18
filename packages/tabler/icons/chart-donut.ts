import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartDonutIcon],svg[tabler-chart-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H16a4.1 4.1 0 1 1-5-5V4a.9.9 0 0 0-1-.8"></svg:path><svg:path d="M15 3.5A9 9 0 0 1 20.5 9H16a9 9 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class TablerChartDonutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
