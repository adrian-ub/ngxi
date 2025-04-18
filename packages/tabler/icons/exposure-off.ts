import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExposureOffIcon],svg[tabler-exposure-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.6 20.4l8.371-8.371m2.04-2.04L20.4 3.6M6 8h2m0 0v2m6 6h2M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362.36-.95.5-1.5.5H5a2 2 0 0 1-2-2V5c0-.541.215-1.033.565-1.393M3 3l18 18"></svg:path>`,
})
export class TablerExposureOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
