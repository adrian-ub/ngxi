import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSoilTemperatureIcon],svg[carbon-soil-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="19" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="27" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M25 30a4.986 4.986 0 0 1-3-8.98V15a3 3 0 0 1 6 0v6.02A4.986 4.986 0 0 1 25 30m0-16a1 1 0 0 0-1 1v7.13l-.497.29A2.97 2.97 0 0 0 22 25a3 3 0 0 0 6 0a2.97 2.97 0 0 0-1.503-2.581L26 22.13V15a1 1 0 0 0-1-1M2 6h28v2H2z"></svg:path>`,
})
export class CarbonSoilTemperatureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
