import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBluetoothConnectedIcon],svg[tabler-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 8l10 8l-5 4V4l5 4l-10 8m-3-4h1m13 0h1"></svg:path>`,
})
export class TablerBluetoothConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
