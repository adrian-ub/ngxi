import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapNavigationArrowOffCompassArrowMapBearingNavigationMapsHeadingGpsOffDisableIcon],svg[streamline-travel-map-navigation-arrow-off-compass-arrow-map-bearing-navigation-maps-heading-gps-off-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.28 3.28L.5 5.5l6 2l2 6l2.22-5.78m1.08-2.8L13.5.5L8.91 2.27M3.5.5l10 10"></svg:path>`,
})
export class StreamlineTravelMapNavigationArrowOffCompassArrowMapBearingNavigationMapsHeadingGpsOffDisableIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
