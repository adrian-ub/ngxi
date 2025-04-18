import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsLocationHotelIcon],svg[zondicons-location-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h18v6h-2v-2H2v2H0V2h2zm8-6h8a2 2 0 0 1 2 2v3H10zm-4 5a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class ZondiconsLocationHotelIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
