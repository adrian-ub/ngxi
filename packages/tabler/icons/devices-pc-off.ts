import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDevicesPcOffIcon],svg[tabler-devices-pc-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9v10H3V5h2m8 4h9v7h-2m-4 0h-4v-4m2 7h5m-2-2v2M6 13v.01M6 16v.01M3 3l18 18"></svg:path>`,
})
export class TablerDevicesPcOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
