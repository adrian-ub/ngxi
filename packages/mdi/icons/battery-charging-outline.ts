import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryChargingOutlineIcon],svg[mdi-battery-charging-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.05 11h-3V4l-5 10h3v8M12 20H4l.05-14h8m.67-2h-1.67V2h-6v2H3.38a1.33 1.33 0 0 0-1.33 1.33v15.34c0 .73.6 1.33 1.33 1.33h9.34c.73 0 1.33-.6 1.33-1.33V5.33A1.33 1.33 0 0 0 12.72 4"></svg:path>`,
})
export class MdiBatteryChargingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
