import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapLocationPinNavigationMapMapsPinGpsLocationIcon],svg[streamline-travel-map-location-pin-navigation-map-maps-pin-gps-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 5c0 2.49-4.5 8.5-4.5 8.5S2.5 7.49 2.5 5a4.5 4.5 0 0 1 9 0Z"></svg:path><svg:circle cx="7" cy="5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineTravelMapLocationPinNavigationMapMapsPinGpsLocationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
