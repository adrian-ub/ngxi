import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBatteryCharging80Icon],svg[ic-round-battery-charging-80-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V9h4.93l.13-.24c.24-.45.94-.28.94.24h4V5.33C17 4.6 16.4 4 15.67 4"></svg:path><svg:path fill="currentColor" d="M13 12.5h1.17c.38 0 .62.4.44.74l-2.67 5c-.24.45-.94.28-.94-.24v-3.5H9.83a.5.5 0 0 1-.44-.74L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4z"></svg:path>`,
})
export class IcRoundBatteryCharging80Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
