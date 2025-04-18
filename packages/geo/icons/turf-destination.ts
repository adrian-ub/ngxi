import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[geoTurfDestinationIcon],svg[geo-turf-destination-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.483 83.137c-5.401 0-9.796-4.395-9.796-9.796s4.395-9.796 9.796-9.796s9.795 4.395 9.795 9.796s-4.393 9.796-9.795 9.796m0-15.592c-3.196 0-5.796 2.6-5.796 5.796s2.6 5.796 5.796 5.796s5.795-2.6 5.795-5.796s-2.599-5.796-5.795-5.796"></svg:path><svg:circle cx="73.178" cy="26.646" r="7.796" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m64.243 35.212l-8.669 2.322L58.04 40L35.147 62.894l1.414 1.414l22.893-22.894l2.467 2.467z"></svg:path>`,
})
export class GeoTurfDestinationIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
