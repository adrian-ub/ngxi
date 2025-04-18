import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartHistogramIcon],svg[tabler-chart-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3v18h18m-1-3v3m-4-5v5m-4-8v8m-4-5v5"></svg:path><svg:path d="M3 11c6 0 5-5 9-5s3 5 9 5"></svg:path></svg:g>`,
})
export class TablerChartHistogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
