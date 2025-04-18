import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceComputerCameraOffIcon],svg[tabler-device-computer-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.15 6.153a7 7 0 0 0 9.696 9.696m2-2a7 7 0 0 0-9.699-9.695"></svg:path><svg:path d="M9.13 9.122a3 3 0 0 0 3.743 3.749m2-2a3 3 0 0 0-3.737-3.736M8 16l-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerDeviceComputerCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
