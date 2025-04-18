import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryAutomotiveFilledIcon],svg[tabler-battery-automotive-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 1 1 2 0v1h10V3a1 1 0 0 1 1-1m-2 7.5a1 1 0 0 0-1 1v.5h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V13h.5a1 1 0 0 0 0-2H17v-.5a1 1 0 0 0-1-1M9.5 11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerBatteryAutomotiveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
