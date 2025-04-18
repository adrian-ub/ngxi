import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIntrusionPreventionIcon],svg[carbon-intrusion-prevention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="23.887" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m3-18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h21V4zm8 24H4v-4h8v-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8z"></svg:path><svg:path fill="currentColor" d="M28 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5v-2H7v-4h21v2h2v-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonIntrusionPreventionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
