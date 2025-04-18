import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselinePowerOffIcon],svg[ic-baseline-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4L2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28z"></svg:path>`,
})
export class IcBaselinePowerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
