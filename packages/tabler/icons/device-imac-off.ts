import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceImacOffIcon],svg[tabler-device-imac-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h13a1 1 0 0 1 1 1v12c0 .28-.115.532-.3.713M17 17H4a1 1 0 0 1-1-1V4c0-.276.112-.526.293-.707M3 13h10m4 0h4M8 21h8m-6-4l-.5 4m4.5-4l.5 4M3 3l18 18"></svg:path>`,
})
export class TablerDeviceImacOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
