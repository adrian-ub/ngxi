import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartArcsIcon],svg[tabler-chart-arcs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M16.924 11.132a5 5 0 1 0-4.056 5.792"></svg:path><svg:path d="M3 12a9 9 0 1 0 9-9"></svg:path></svg:g>`,
})
export class TablerChartArcsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
