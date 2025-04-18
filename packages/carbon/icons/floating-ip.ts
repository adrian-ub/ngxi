import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFloatingIpIcon],svg[carbon-floating-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 11a5.01 5.01 0 0 0-4.899 4H11.9a5 5 0 1 0 0 2h8.2a5 5 0 1 0 4.9-6m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonFloatingIpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
