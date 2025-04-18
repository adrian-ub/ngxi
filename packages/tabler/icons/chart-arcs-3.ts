import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartArcs3Icon],svg[tabler-chart-arcs-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M7 12a5 5 0 1 0 5-5"></svg:path><svg:path d="M6.29 18.957A9 9 0 1 0 12 3"></svg:path></svg:g>`,
})
export class TablerChartArcs3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
