import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryChargingWirelessAlertIcon],svg[mdi-battery-charging-wireless-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2V2H5v2H3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1M9 18H7v-2h2zm0-4H7V8h2zm11.1-9.1l-1.4 1.4c3.1 3.1 3.1 8.2 0 11.3l1.4 1.4c3.9-3.8 3.9-10.2 0-14.1m-2.9 2.9l-1.4 1.4c1.6 1.6 1.6 4.1 0 5.7l1.4 1.4c2.4-2.4 2.4-6.2 0-8.5"></svg:path>`,
})
export class MdiBatteryChargingWirelessAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
