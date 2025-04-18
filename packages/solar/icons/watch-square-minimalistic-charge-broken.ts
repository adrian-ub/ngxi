import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeBrokenIcon],svg[solar-watch-square-minimalistic-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12.857 9L10 12h4l-2.857 3"></svg:path><svg:path d="M7 2h10M7 22h10m1.961-12.8c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
