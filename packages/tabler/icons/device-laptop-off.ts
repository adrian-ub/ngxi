import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceLaptopOffIcon],svg[tabler-device-laptop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19h16M10 6h8a1 1 0 0 1 1 1v8m-3 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 3l18 18"></svg:path>`,
})
export class TablerDeviceLaptopOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
