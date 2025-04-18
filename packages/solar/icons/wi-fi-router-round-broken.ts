import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterRoundBrokenIcon],svg[solar-wi-fi-router-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 10H7a5 5 0 0 0 0 10h10a5 5 0 0 0 4-8"></svg:path><svg:path fill="currentColor" d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8.5 15a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15h6.5m3.083-9.603a5.502 5.502 0 0 0-10.167 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"></svg:path><svg:path fill="currentColor" d="M17.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWiFiRouterRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
