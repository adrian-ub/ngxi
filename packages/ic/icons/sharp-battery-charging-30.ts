import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging30Icon],svg[ic-sharp-battery-charging-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17z"></svg:path><svg:path fill="currentColor" d="M11 20v-5.5H7V22h10v-7.5h-3.07z"></svg:path>`,
})
export class IcSharpBatteryCharging30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
