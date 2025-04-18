import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapRectangleFlagNavigationMapMapsFlagGpsLocationDestinationGoalIcon],svg[streamline-travel-map-rectangle-flag-navigation-map-maps-flag-gps-location-destination-goal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5v13m0-13h9v7h-9"></svg:path>`,
})
export class StreamlineTravelMapRectangleFlagNavigationMapMapsFlagGpsLocationDestinationGoalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
