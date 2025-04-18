import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGasStationIcon],svg[carbon-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h7v2H8z"></svg:path><svg:path fill="currentColor" d="m28.414 8l-5-5L22 4.414l3 3V12a2 2 0 0 0 2 2v10.5a1.5 1.5 0 0 1-3 0V16a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v21H2v2h19v-2h-2v-9h3v7.4a3.564 3.564 0 0 0 2.765 3.525A3.506 3.506 0 0 0 29 24.5V9.414A2 2 0 0 0 28.414 8M17 26H6V6h11Z"></svg:path>`,
})
export class CarbonGasStationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
