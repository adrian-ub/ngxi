import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCityLinearIcon],svg[solar-city-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 22V12c0-1.886 0-2.828.586-3.414S5.114 8 7 8s2.828 0 3.414.586S11 10.114 11 12"></svg:path><svg:path d="M17 22v-6c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v6"></svg:path><svg:path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"></svg:path><svg:path stroke-linecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293S10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4"></svg:path></svg:g>`,
})
export class SolarCityLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
