import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartScatterPlotHexbinIcon],svg[mdi-chart-scatter-plot-hexbin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v18h18v2H2zm12 12.5L12 18H7.94l-2.02-3.5L7.94 11H12zm.08-8L12.06 10H8L6 6.5L8 3h4.06zm7.17 4L19.23 14h-4.04l-2.02-3.5L15.19 7h4.04z"></svg:path>`,
})
export class MdiChartScatterPlotHexbinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
