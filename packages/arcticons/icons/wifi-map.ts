import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWifiMapIcon],svg[arcticons-wifi-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="28.154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.03" ry="3.105"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 20.609a7.6 7.6 0 0 0-7.093 5.766a10.1 10.1 0 0 0-.106 3.034c.488 4.06 4.223 7.83 7.199 11.001c2.977-3.172 6.711-6.942 7.2-11a10.1 10.1 0 0 0-.107-3.035A7.6 7.6 0 0 0 24 20.609M4.5 17.85a23.663 23.663 0 0 1 39-.004"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.236 22.929a16.118 16.118 0 0 1 27.528 0"></svg:path>`,
})
export class ArcticonsWifiMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
