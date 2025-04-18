import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBatteryStdIcon],svg[ic-sharp-battery-std-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h-3V2h-4v2H7v18h10z"></svg:path>`,
})
export class IcSharpBatteryStdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
