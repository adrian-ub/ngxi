import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGasStationOffIcon],svg[tabler-gas-station-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 11a2 2 0 0 1 2 2m3 3V9l-3-3M4 20V6c0-.548.22-1.044.577-1.405M8 4h4a2 2 0 0 1 2 2v4m0 4v6M3 20h12"></svg:path><svg:path d="M18 7v1a1 1 0 0 0 1 1h1M4 11h7M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerGasStationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
