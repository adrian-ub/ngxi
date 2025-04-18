import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryChargingFilledIcon],svg[tdesign-battery-charging-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.375 5.172l-1.703-1.048L5.21 13h6l-3.586 5.828l1.703 1.048L14.79 11h-6z"></svg:path><svg:path fill="currentColor" d="M0 5h8.372l-5.846 9.5h6L5.756 19H0zm21 14h-9.373l5.846-9.5h-6l2.77-4.5H21zm3-10v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryChargingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
