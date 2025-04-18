import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartScatterIcon],svg[hugeicons-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 11h.009M20 4h.009M11 6h.009M11 11h.009M9 16h.009M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3" color="currentColor"></svg:path>`,
})
export class HugeiconsChartScatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
