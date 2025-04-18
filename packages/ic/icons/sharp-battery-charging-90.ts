import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryCharging90Icon],svg[ic-sharp-battery-charging-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4z"></svg:path><svg:path fill="currentColor" d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4z"></svg:path>`,
})
export class IcSharpBatteryCharging90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
