import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingLightIcon],svg[ph-battery-charging-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-116.9 28.85a6 6 0 0 1 .27 5.83l-16 32a6 6 0 1 1-10.74-5.36L122.29 134H100a6 6 0 0 1-5.37-8.68l16-32a6 6 0 0 1 10.74 5.36L109.71 122H132a6 6 0 0 1 5.1 2.85"></svg:path>`,
})
export class PhBatteryChargingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
