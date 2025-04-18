import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWifiautomaticIcon],svg[arcticons-wifiautomatic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.25 23.51a14.44 14.44 0 0 0-18.45-.05v.05m9.2 3.54a7.61 7.61 0 1 0 7.61 7.61h0A7.61 7.61 0 0 0 24 27.05m14-9.36a22 22 0 0 0-28 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.48 12.4a29 29 0 0 0-37 0m15.23 26.47l3.39-8.44m3.24 8.47l-3.24-8.47m2.16 5.63h-4.43"></svg:path>`,
})
export class ArcticonsWifiautomaticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
