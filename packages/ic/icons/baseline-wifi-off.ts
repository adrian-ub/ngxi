import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineWifiOffIcon],svg[ic-baseline-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7zm-4 4a9.8 9.8 0 0 0-4.49-2.56l3.53 3.53zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.7 9.7 0 0 0 5 13v.01L6.99 15a7.04 7.04 0 0 1 4.92-2.06L18.98 20l1.27-1.26L3.29 1.79zM9 17l3 3l3-3a4.237 4.237 0 0 0-6 0"></svg:path>`,
})
export class IcBaselineWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
