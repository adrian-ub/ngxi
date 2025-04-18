import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryAlertIcon],svg[ic-sharp-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10zm-4 14h-2v-2h2zm0-4h-2V9h2z"></svg:path>`,
})
export class IcSharpBatteryAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
