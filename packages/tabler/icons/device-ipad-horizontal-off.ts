import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceIpadHorizontalOffIcon],svg[tabler-device-ipad-horizontal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h12a2 2 0 0 1 2 2v12m-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5 13h6M3 3l18 18"></svg:path>`,
})
export class TablerDeviceIpadHorizontalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
