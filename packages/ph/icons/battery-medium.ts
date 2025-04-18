import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumIcon],svg[ph-battery-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM104 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
