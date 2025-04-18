import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartHistogramIcon],svg[hugeicons-chart-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m10 7v11m5-8v8M8 13v7"></svg:path><svg:path d="M21 7.987c-1.84 0-3.808.256-5.123-1.494c-1.497-1.99-4.257-1.99-5.754 0C8.808 8.243 6.84 7.987 5 7.987H3"></svg:path></svg:g>`,
})
export class HugeiconsChartHistogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
