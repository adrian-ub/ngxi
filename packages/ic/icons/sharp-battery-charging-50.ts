import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging50Icon],svg[ic-sharp-battery-charging-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.47 13.5L11 20v-5.5H9l.53-1H7V22h10v-8.5z"></svg:path><svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v9.5h2.53L13 7v5.5h2l-.53 1H17z"></svg:path>`,
})
export class IcSharpBatteryCharging50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
