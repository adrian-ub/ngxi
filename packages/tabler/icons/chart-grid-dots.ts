import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartGridDotsIcon],svg[tabler-chart-grid-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8 0h8m2 2v1m0-18v1M6 20v1m0-11V3m6 0v18m6-13v8M8 12h13m0-6h-1m-4 0H3m0 6h1m16 6h1M3 18h1m2-4v2"></svg:path>`,
})
export class TablerChartGridDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
