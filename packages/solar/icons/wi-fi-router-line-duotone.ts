import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterLineDuotoneIcon],svg[solar-wi-fi-router-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 11L3 4m14 7l4-7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 15h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.167 5.397A5.502 5.502 0 0 0 7 5.397" opacity=".4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0" opacity=".7"></svg:path><svg:path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWiFiRouterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
