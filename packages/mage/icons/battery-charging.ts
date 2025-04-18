import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBatteryChargingIcon],svg[mage-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.333 5.87H5.556A2.806 2.806 0 0 0 2.75 8.674v6.65a2.806 2.806 0 0 0 2.806 2.806h8.777a2.806 2.806 0 0 0 2.806-2.806v-6.65a2.806 2.806 0 0 0-2.806-2.806m5.355 9.221h.534a1.03 1.03 0 0 0 1.028-1.028V9.95a1.03 1.03 0 0 0-1.028-1.028h-.534"></svg:path><svg:path d="M10.972 8.917L7.89 12H12l-3.083 3.083"></svg:path></svg:g>`,
})
export class MageBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
