import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartSankeyIcon],svg[tabler-chart-sankey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v18h18M3 6h18"></svg:path><svg:path d="M3 8c10 0 8 9 18 9"></svg:path></svg:g>`,
})
export class TablerChartSankeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
