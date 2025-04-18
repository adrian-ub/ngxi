import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareBrokenIcon],svg[solar-watch-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.077L14 14"></svg:path><svg:path d="m16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692l-.08.368"></svg:path><svg:path d="m16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692l-.08.368m9.555 13l-.082.368c-.334 1.501-.5 2.252-1.049 2.692s-1.318.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692l-.08-.368"></svg:path><svg:path stroke-linecap="round" d="M18.961 9.2c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"></svg:path></svg:g>`,
})
export class SolarWatchSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
