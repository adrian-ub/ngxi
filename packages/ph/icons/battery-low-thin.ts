import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowThinIcon],svg[ph-battery-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12ZM60 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
