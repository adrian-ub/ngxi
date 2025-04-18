import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneCandlestickChartIcon],svg[ic-twotone-candlestick-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2z"></svg:path><svg:path fill="currentColor" d="M7 8h2v8H7zm8 2h2v3h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z"></svg:path>`,
})
export class IcTwotoneCandlestickChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
