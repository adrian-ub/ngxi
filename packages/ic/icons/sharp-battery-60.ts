import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBattery60Icon],svg[ic-sharp-battery-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M17 4h-3V2h-4v2H7v7h10z"></svg:path><svg:path fill="currentColor" d="M7 11v11h10V11z"></svg:path>`,
})
export class IcSharpBattery60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
