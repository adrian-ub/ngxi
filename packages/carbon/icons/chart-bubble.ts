import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartBubbleIcon],svg[carbon-chart-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:path fill="currentColor" d="M10 16a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4m11-8a4 4 0 1 1-4 4a4 4 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6m3.5 17a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5m0-2a3.5 3.5 0 1 0 3.5 3.5a3.5 3.5 0 0 0-3.5-3.5"></svg:path>`,
})
export class CarbonChartBubbleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
