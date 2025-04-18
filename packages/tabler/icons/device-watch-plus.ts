import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceWatchPlusIcon],svg[tabler-device-watch-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3m-2 7h6m-3-3v6M9 18v3h3.5M9 6V3h6v3"></svg:path>`,
})
export class TablerDeviceWatchPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
