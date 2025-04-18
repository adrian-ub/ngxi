import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBatteryChargingIcon],svg[carbon-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11h-1v-1a2 2 0 0 0-2-2h-4v2h4v3h3v6h-3v3h-5v2h5a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M11 22H6V10h6V8H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5z"></svg:path><svg:path fill="currentColor" d="m14.81 23.58l-1.62-1.16L17.06 17H9.37l6.85-8.62l1.56 1.24L13.51 15h7.43z"></svg:path>`,
})
export class CarbonBatteryChargingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
