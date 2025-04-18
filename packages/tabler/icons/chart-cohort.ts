import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartCohortIcon],svg[tabler-chart-cohort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 9h18V3H3v18h6V3"></svg:path><svg:path d="M3 15h12V3"></svg:path></svg:g>`,
})
export class TablerChartCohortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
