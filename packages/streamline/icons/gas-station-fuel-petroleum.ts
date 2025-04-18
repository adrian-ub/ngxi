import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGasStationFuelPetroleumIcon],svg[streamline-gas-station-fuel-petroleum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m0 1h8m-8 3h8m0 4h3a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2v0a1 1 0 0 1-1-1V4l3-3"></svg:path><svg:path d="m10.5 5.5l2-.5V2M6 10v1"></svg:path></svg:g>`,
})
export class StreamlineGasStationFuelPetroleumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
