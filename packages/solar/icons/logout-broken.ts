import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLogoutBrokenIcon],svg[solar-logout-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3"></svg:path><svg:path d="M4 12a8 8 0 0 1 8-8m0 16a7.99 7.99 0 0 1-6.245-3"></svg:path></svg:g>`,
})
export class SolarLogoutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
