import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiMediumThinIcon],svg[ph-wifi-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m66.48-78.09a120 120 0 0 0-149 0a4 4 0 0 0 5 6.27a112 112 0 0 1 139 0a4 4 0 0 0 5-6.27m-32.13 35.86a72 72 0 0 0-84.7 0a4 4 0 1 0 4.71 6.46a64 64 0 0 1 75.28 0a4 4 0 1 0 4.71-6.46"></svg:path>`,
})
export class PhWifiMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
