import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferDiagonalLinearIcon],svg[solar-round-transfer-diagonal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m6.5 4l7.378 8V7.5m3.5 12.378l-7.5-7.879v4.5"></svg:path></svg:g>`,
})
export class SolarRoundTransferDiagonalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
