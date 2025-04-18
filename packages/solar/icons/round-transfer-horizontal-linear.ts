import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferHorizontalLinearIcon],svg[solar-round-transfer-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 10H7l3.438-3M7 14h10l-3.437 3"></svg:path></svg:g>`,
})
export class SolarRoundTransferHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
