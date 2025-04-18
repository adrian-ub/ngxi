import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiHighBoldIcon],svg[ph-wifi-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m95.61-120.09a176 176 0 0 0-223.22 0a12 12 0 1 0 15.23 18.55a152 152 0 0 1 192.76 0a12 12 0 1 0 15.23-18.55m-32.16 35.73a128 128 0 0 0-158.9 0a12 12 0 0 0 14.9 18.81a104 104 0 0 1 129.1 0a12 12 0 0 0 14.9-18.81m-32.38 35.66a80.05 80.05 0 0 0-94.14 0a12 12 0 0 0 14.14 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.14-19.4"></svg:path>`,
})
export class PhWifiHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
