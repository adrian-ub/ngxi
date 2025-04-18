import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartLineData01Icon],svg[hugeicons-chart-line-data-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3"></svg:path><svg:path d="M5 20c.44-3.156 2.676-11.236 5.428-11.236c1.902 0 2.395 3.871 4.258 3.871C17.893 12.635 17.428 4 21 4"></svg:path></svg:g>`,
})
export class HugeiconsChartLineData01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
