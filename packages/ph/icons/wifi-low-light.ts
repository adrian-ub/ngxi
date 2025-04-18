import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiLowLightIcon],svg[ph-wifi-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10m33.53-43.85a74 74 0 0 0-87.06 0a6 6 0 0 0 7.06 9.7a62 62 0 0 1 72.94 0a6 6 0 0 0 8.38-1.32a6 6 0 0 0-1.32-8.38"></svg:path>`,
})
export class PhWifiLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
