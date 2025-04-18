import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferDiagonalBrokenIcon],svg[solar-round-transfer-diagonal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m6.5 4l7.378 8V7.5m3.5 12.378l-7.5-7.879v4.5"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundTransferDiagonalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
