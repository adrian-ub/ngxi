import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAirportLocationIcon],svg[carbon-airport-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-6.07A8.01 8.01 0 0 0 17 8.07V2h-2v6.07A8.01 8.01 0 0 0 8.07 15H2v2h6.07A8.01 8.01 0 0 0 15 23.93V30h2v-6.07A8.01 8.01 0 0 0 23.93 17H30Zm-14 7a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path>`,
})
export class CarbonAirportLocationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
