import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapNavigationArrowCompassArrowMapBearingNavigationMapsHeadingGpsIcon],svg[streamline-travel-map-navigation-arrow-compass-arrow-map-bearing-navigation-maps-heading-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 13.5l5-13l-13 5l6 2l2 6z"></svg:path>`,
})
export class StreamlineTravelMapNavigationArrowCompassArrowMapBearingNavigationMapsHeadingGpsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
