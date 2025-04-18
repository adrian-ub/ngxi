import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapLocationTargetOffTargetLocationMapOffServicesNavigationMapsGpsIcon],svg[streamline-travel-map-location-target-off-target-location-map-off-services-navigation-maps-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 2.4V.5m0 13v-2M11.6 7h1.9m-12-5.5l11 11M.5 7h2m1.3-3.2c1.7-1.8 4.6-1.9 6.4-.2s1.9 4.5.2 6.4c-.1.1-.1.2-.2.2M8 11.4c-2.4.5-4.8-1-5.4-3.4c-.1-.3-.1-.7-.1-1c0-.5.1-1 .2-1.4"></svg:path>`,
})
export class StreamlineTravelMapLocationTargetOffTargetLocationMapOffServicesNavigationMapsGpsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
