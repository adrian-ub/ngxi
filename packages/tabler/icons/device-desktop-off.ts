import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceDesktopOffIcon],svg[tabler-device-desktop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-4 0H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m3 16h10m-8-4v4m6-4v4M3 3l18 18"></svg:path>`,
})
export class TablerDeviceDesktopOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
