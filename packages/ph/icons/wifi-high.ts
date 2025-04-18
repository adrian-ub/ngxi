import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiHighIcon],svg[ph-wifi-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m97.08-117a172 172 0 0 0-218.16 0a8 8 0 0 0 10.16 12.37a156 156 0 0 1 197.84 0A8 8 0 0 0 237.08 87M205 122.77a124 124 0 0 0-153.94 0A8 8 0 0 0 61 135.31a108 108 0 0 1 134.06 0a8 8 0 0 0 11.24-1.3a8 8 0 0 0-1.3-11.24m-32.26 35.76a76.05 76.05 0 0 0-89.42 0a8 8 0 0 0 9.42 12.94a60 60 0 0 1 70.58 0a8 8 0 1 0 9.42-12.94"></svg:path>`,
})
export class PhWifiHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
