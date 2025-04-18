import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryChargingIcon],svg[tdesign-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.376 5.172L8.79 11h6l-5.462 8.876l-1.704-1.048L11.21 13h-6l5.462-8.876zM0 5h7.5v2H2v10h4v2H0zm14 0h7v14h-8v-2h6V7h-5zm10 4v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
