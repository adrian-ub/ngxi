import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartSankeyIcon],svg[mdi-chart-sankey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5H4V2H2v20h20v-2H4V9c4.09 0 6.13 2 8.29 4.21S17.09 18 22 18v-2c-4.09 0-6.13-2-8.29-4.21S8.91 7 4 7h18Z"></svg:path>`,
})
export class MdiChartSankeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
