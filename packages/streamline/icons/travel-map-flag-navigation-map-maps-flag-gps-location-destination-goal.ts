import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapFlagNavigationMapMapsFlagGpsLocationDestinationGoalIcon],svg[streamline-travel-map-flag-navigation-map-maps-flag-gps-location-destination-goal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5v13m9-6h-9v-7h9L8.5 4l3 3.5z"></svg:path>`,
})
export class StreamlineTravelMapFlagNavigationMapMapsFlagGpsLocationDestinationGoalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
