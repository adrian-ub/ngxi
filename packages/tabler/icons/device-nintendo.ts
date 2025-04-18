import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceNintendoIcon],svg[tabler-device-nintendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zm4 0V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z"></svg:path><svg:circle cx="17.5" cy="15.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="6.5" cy="8.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerDeviceNintendoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
