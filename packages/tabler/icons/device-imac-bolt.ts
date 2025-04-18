import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceImacBoltIcon],svg[tabler-device-imac-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 17H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8.5M3 13h13m-8 8h5.5M10 17l-.5 4m9.5-5l-2 3h4l-2 3"></svg:path>`,
})
export class TablerDeviceImacBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
