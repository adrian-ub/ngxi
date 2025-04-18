import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartPopulationIcon],svg[carbon-chart-population-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 22H17v-2h9v-6h-9v-2h5V6h-5V2h-2v4h-5v6h5v2H6v6h9v2H2v6h13v2h2v-2h13ZM20 8v2h-3V8Zm-8 2V8h3v2Zm12 6v2h-7v-2ZM8 18v-2h7v2Zm-4 8v-2h11v2Zm24 0H17v-2h11Z"></svg:path>`,
})
export class CarbonChartPopulationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
