import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBluetoothOffIcon],svg[tabler-bluetooth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18m-4.562-4.55L12 20v-8m0-4V4l5 4l-2.776 2.22m-2.222 1.779l-5 4"></svg:path>`,
})
export class TablerBluetoothOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
