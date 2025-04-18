import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHeatMapStocksIcon],svg[carbon-heat-map-stocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 21H5v-4h4Zm2 2h4v4h-4Zm6 0h4v4h-4Zm0-8v-4h4v4Zm4-6h-4V5h4Zm2 2h4v4h-4Zm-8-6v10H5V5Zm8 22V17h4v10Z"></svg:path>`,
})
export class CarbonHeatMapStocksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
