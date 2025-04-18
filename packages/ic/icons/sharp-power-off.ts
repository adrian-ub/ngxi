import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPowerOffIcon],svg[ic-sharp-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.49V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l7.69 7.69zM10 3H8v1.88l2 2zm-5.88.84L2.71 5.25l3.34 3.34c-.03.13-.05.27-.05.4v5.51L9.5 18v3h5v-3l.48-.48l4.47 4.47l1.41-1.41z"></svg:path>`,
})
export class IcSharpPowerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
