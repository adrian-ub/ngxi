import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCandlestickChartIcon],svg[ic-sharp-candlestick-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z"></svg:path>`,
})
export class IcSharpCandlestickChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
