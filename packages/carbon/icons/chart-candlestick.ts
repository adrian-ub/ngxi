import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartCandlestickIcon],svg[carbon-chart-candlestick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10h-2V6h-2v4h-2v12h2v4h2v-4h2zm-2 10h-2v-8h2zM14 8h-2V4h-2v4H8v10h2v4h2v-4h2zm-2 8h-2v-6h2z"></svg:path><svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path>`,
})
export class CarbonChartCandlestickIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
