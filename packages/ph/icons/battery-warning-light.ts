import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningLightIcon],svg[ph-battery-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-144 28V96a6 6 0 0 1 12 0v28a6 6 0 0 1-12 0m16 32a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBatteryWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
