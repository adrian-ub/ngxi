import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudWifiIcon],svg[streamline-cloud-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.239a9 9 0 0 0-7 0m5.7 2.099a6.78 6.78 0 0 0-4.36 0m6.03 5.369a.22.22 0 0 1-.153-.177a3.415 3.415 0 0 0-6.63-.804a.2.2 0 0 1-.184.113a2.819 2.819 0 0 0 .377 5.624h6.05a2.41 2.41 0 0 0 .54-4.756"></svg:path>`,
})
export class StreamlineCloudWifiIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
