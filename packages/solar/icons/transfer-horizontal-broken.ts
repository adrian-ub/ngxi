import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTransferHorizontalBrokenIcon],svg[solar-transfer-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 4L4 10h10m6 0h-2.5m-3 10l5.5-6H10m-6 0h2.5"></svg:path>`,
})
export class SolarTransferHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
