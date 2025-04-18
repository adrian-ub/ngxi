import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceCctvFilledIcon],svg[tabler-device-cctv-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v6a8 8 0 1 1-16 0V8zm-8 2a4 4 0 0 0-3.996 3.826L8 14a4 4 0 1 0 4-4m.01 3a1 1 0 0 1 .117 1.993L12 15a1 1 0 0 1-.117-1.993zM2 5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"></svg:path>`,
})
export class TablerDeviceCctvFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
