import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTransferHorizontalLinearIcon],svg[solar-transfer-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 10H4l5.5-6M4 14h16l-5.5 6"></svg:path>`,
})
export class SolarTransferHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
