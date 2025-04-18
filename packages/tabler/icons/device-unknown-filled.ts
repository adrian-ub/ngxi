import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceUnknownFilledIcon],svg[tabler-device-unknown-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 13a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V16a1 1 0 0 0-1-1m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.526 1.292a.98.98 0 0 1 1.195-.239A1 1 0 0 1 12.003 12a1 1 0 0 0-.006 2a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerDeviceUnknownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
