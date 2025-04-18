import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalDuotoneIcon],svg[ph-battery-charging-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M150.81 131.79a8 8 0 0 1 .35 7.79l-16 32a8 8 0 0 1-14.32-7.16L131.06 144H112a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L124.94 128H144a8 8 0 0 1 6.81 3.79M96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhBatteryChargingVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
