import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiLowBoldIcon],svg[ph-wifi-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m31.06-48.7a80 80 0 0 0-94.12 0a12 12 0 1 0 14.13 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.13-19.4"></svg:path>`,
})
export class PhWifiLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
