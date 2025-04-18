import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCarBatteryChargingIcon],svg[streamline-car-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 5v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1M2 4V2h3v2m4 0V2h3v2"></svg:path><svg:path d="m7.5 6l-2 2.5h3l-2 3"></svg:path></svg:g>`,
})
export class StreamlineCarBatteryChargingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
