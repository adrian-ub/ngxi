import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineBatteryCharging20Icon],svg[ic-baseline-battery-charging-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4"></svg:path>`,
})
export class IcBaselineBatteryCharging20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
