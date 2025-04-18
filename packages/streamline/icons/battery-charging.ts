import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryChargingIcon],svg[streamline-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5z"></svg:path><svg:path d="m7.177 4.658l-1.658 2.24h2.168l-1.182 2.13"></svg:path></svg:g>`,
})
export class StreamlineBatteryChargingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
