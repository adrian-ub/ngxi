import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapLocationCompass1ArrowCompassLocationGpsMapMapsPointIcon],svg[streamline-travel-map-location-compass-1-arrow-compass-location-gps-map-maps-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m7.5 10.5l2-6l-6 2L6 8l1.5 2.5z"></svg:path></svg:g>`,
})
export class StreamlineTravelMapLocationCompass1ArrowCompassLocationGpsMapMapsPointIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
