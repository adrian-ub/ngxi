import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCandlestickChartOutlineIcon],svg[material-symbols-light-candlestick-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19v-2H6V7h2V5h1v2h2v10H9v2zm-1-3h3V8H7zm8 3v-4.615h-2V8.808h2V5h1v3.808h2v5.577h-2V19zm-1-5.616h3V9.808h-3zm1.5-1.788"></svg:path>`,
})
export class MaterialSymbolsLightCandlestickChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
