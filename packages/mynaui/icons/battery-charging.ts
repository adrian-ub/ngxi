import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingIcon],svg[mynaui-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 7H18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.5m-7-10H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5M21 11v2m-9.999-6L8.5 12h5.002L11 17"></svg:path>`,
})
export class MynauiBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
