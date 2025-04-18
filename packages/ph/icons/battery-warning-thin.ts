import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningThinIcon],svg[ph-battery-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-140 28V96a4 4 0 0 1 8 0v28a4 4 0 0 1-8 0m12 32a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBatteryWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
