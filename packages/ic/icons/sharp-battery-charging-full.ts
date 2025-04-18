import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryChargingFullIcon],svg[ic-sharp-battery-charging-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10zm-6 16v-5.5H9L13 7v5.5h2z"></svg:path>`,
})
export class IcSharpBatteryChargingFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
