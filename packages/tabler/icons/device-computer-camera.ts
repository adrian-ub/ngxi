import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceComputerCameraIcon],svg[tabler-device-computer-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0"></svg:path><svg:path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-1 6l-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16"></svg:path></svg:g>`,
})
export class TablerDeviceComputerCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
