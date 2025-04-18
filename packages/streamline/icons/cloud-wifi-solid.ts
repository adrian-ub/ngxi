import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudWifiSolidIcon],svg[streamline-cloud-wifi-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.98.07c-1.32 0-2.624.31-3.832.907a.75.75 0 1 0 .664 1.344A7.1 7.1 0 0 1 6.98 1.57c1.084 0 2.16.254 3.168.752a.75.75 0 1 0 .664-1.344A8.6 8.6 0 0 0 6.98.069Zm2.098 2.748a5.26 5.26 0 0 0-4.156 0a.75.75 0 1 0 .587 1.38a3.76 3.76 0 0 1 2.982 0a.75.75 0 1 0 .587-1.38M5.308 5.88a3.757 3.757 0 0 1 5.71 2.63a2.8 2.8 0 0 1-.838 5.466H4.422a3.19 3.19 0 0 1-.593-6.347a3.76 3.76 0 0 1 1.48-1.75Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudWifiSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
