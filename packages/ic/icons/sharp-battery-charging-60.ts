import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging60Icon],svg[ic-sharp-battery-charging-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4z"></svg:path><svg:path fill="currentColor" d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4z"></svg:path>`,
})
export class IcSharpBatteryCharging60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
