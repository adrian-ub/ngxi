import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceGamepad3FilledIcon],svg[tabler-device-gamepad-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.707 14.293l3 3A1 1 0 0 1 16 18v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 1.414 0M6 8a1 1 0 0 1 .707.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 6 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 18 8zm-6-6a2 2 0 0 1 2 2v2a1 1 0 0 1-.293.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 8 6V4a2 2 0 0 1 2-2z"></svg:path>`,
})
export class TablerDeviceGamepad3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
