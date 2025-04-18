import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartHighLowIcon],svg[carbon-chart-high-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8h-3V6h-2v14H7v2h3v2h2V10h3zm12 2h-3V6h-2v12h-3v2h3v4h2V12h3z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartHighLowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
