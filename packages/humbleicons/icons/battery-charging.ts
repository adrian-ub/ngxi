import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBatteryChargingIcon],svg[humbleicons-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10.5v3M8.5 17H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h.5m9 10h.5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2.5M10 7l-1 5.5l4-1l-1 5.5"></svg:path>`,
})
export class HumbleiconsBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
