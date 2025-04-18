import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBatteryChargingIcon],svg[bxs-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-4zM9 17l2-3.89L7 12l6-5l-1 3.89L16 12z"></svg:path>`,
})
export class BxsBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
