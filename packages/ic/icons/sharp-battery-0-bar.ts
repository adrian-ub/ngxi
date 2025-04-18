import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery0BarIcon],svg[ic-sharp-battery-0-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v18H7V4h3V2h4v2zm-2 2H9v14h6z"></svg:path>`,
})
export class IcSharpBattery0BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
