import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartInfographicIcon],svg[tabler-chart-infographic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M7 3v4h4M9 17v4m8-7v7m-4-8v8m8-9v9"></svg:path></svg:g>`,
})
export class TablerChartInfographicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
