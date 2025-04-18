import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBatteryChargingIcon],svg[pixelarticons-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h6v-2H4V7h4V5zm10 0h6v4h2v6h-2v4h-6v-2h4V7h-4zm-4 2h2v4h4v2h-2v2h-2v2h-2v-4H6v-2h2V9h2z"></svg:path>`,
})
export class PixelarticonsBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
