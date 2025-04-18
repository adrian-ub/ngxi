import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterMinimalisticLineDuotoneIcon],svg[solar-wi-fi-router-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0" opacity=".4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0" opacity=".7"></svg:path><svg:path fill="currentColor" d="M7 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 12V9"></svg:path></svg:g>`,
})
export class SolarWiFiRouterMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
