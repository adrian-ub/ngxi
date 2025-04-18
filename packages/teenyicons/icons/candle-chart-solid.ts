import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCandleChartSolidIcon],svg[teenyicons-candle-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0H0v15h15v-1H1z"></svg:path><svg:path fill="currentColor" d="M8 0v3H7v5h3V3H9V0zM3 4v1H2v5h1v2h1v-2h1V5H4V4zm9 2h1V4h1v2h1v5h-1v2h-1v-2h-1z"></svg:path>`,
})
export class TeenyiconsCandleChartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
