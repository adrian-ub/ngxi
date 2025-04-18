import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceGamepad3Icon],svg[tabler-device-gamepad-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12L6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zm6 0l3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zm-3 3l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zm0-6L9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z"></svg:path>`,
})
export class TablerDeviceGamepad3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
