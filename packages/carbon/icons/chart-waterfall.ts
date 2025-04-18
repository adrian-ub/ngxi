import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartWaterfallIcon],svg[carbon-chart-waterfall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28V18h-2v10h-4V4h-2v24H10V14H8v14H4V2H2v26a2 2 0 0 0 2 2h26v-2Z"></svg:path><svg:path fill="currentColor" d="M14 4h2v14h-2z"></svg:path>`,
})
export class CarbonChartWaterfallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
