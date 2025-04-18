import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceWatchOffIcon],svg[tabler-device-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132A3 3 0 0 1 15 18H9a3 3 0 0 1-3-3V9c0-.817.327-1.559.857-2.1M9 18v3h6v-3M9 5V3h6v3M3 3l18 18"></svg:path>`,
})
export class TablerDeviceWatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
