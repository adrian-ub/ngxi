import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingFourSolidIcon],svg[mynaui-battery-charging-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm5 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm5.5-1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryChargingFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
