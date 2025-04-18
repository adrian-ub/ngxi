import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapLocationTarget1NavigationLocationMapServicesMapsGpsTargetIcon],svg[streamline-travel-map-location-target-1-navigation-location-map-services-maps-gps-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="4.5"></svg:circle><svg:circle cx="7" cy="7" r=".5"></svg:circle><svg:path d="M7 2.5v-2m0 13v-2M11.5 7h2M.5 7h2"></svg:path></svg:g>`,
})
export class StreamlineTravelMapLocationTarget1NavigationLocationMapServicesMapsGpsTargetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
