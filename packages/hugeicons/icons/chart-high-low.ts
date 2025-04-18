import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartHighLowIcon],svg[hugeicons-chart-high-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m7 4h2m6 0h2M8 15h2m6 0h2M10 5v12m8-12v12" color="currentColor"></svg:path>`,
})
export class HugeiconsChartHighLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
