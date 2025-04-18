import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceAirpodsCaseIcon],svg[tabler-device-airpods-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 10H3m0-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></svg:path><svg:path d="M7 10v1.5A1.5 1.5 0 0 0 8.5 13h7a1.5 1.5 0 0 0 1.5-1.5V10"></svg:path></svg:g>`,
})
export class TablerDeviceAirpodsCaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
