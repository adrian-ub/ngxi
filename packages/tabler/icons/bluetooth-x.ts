import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBluetoothXIcon],svg[tabler-bluetooth-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 8l10 8l-5 4V4l1 .802m0 6.396L7 16m9-10l4 4m0-4l-4 4"></svg:path>`,
})
export class TablerBluetoothXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
