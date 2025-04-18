import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartWinLossIcon],svg[carbon-chart-win-loss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15H16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9H2v2h14v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9h2ZM6 6h8v9H6Zm20 20h-8v-9h8Z"></svg:path>`,
})
export class CarbonChartWinLossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
