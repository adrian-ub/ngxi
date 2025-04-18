import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalThinIcon],svg[ph-battery-charging-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.4 133.9a4 4 0 0 1 .18 3.89l-16 32A4 4 0 0 1 128 172a4.1 4.1 0 0 1-1.79-.42a4 4 0 0 1-1.79-5.37L137.53 140H112a4 4 0 0 1-3.58-5.79l16-32a4 4 0 1 1 7.16 3.58L118.47 132H144a4 4 0 0 1 3.4 1.9M96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhBatteryChargingVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
