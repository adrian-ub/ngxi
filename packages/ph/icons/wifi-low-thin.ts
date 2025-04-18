import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiLowThinIcon],svg[ph-wifi-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m34.35-42.23a72 72 0 0 0-84.7 0a4 4 0 1 0 4.71 6.46a64 64 0 0 1 75.28 0a4 4 0 1 0 4.71-6.46"></svg:path>`,
})
export class PhWifiLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
