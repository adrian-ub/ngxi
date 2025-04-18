import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesTrafficSignStreetSignTrafficTravelIcon],svg[streamline-travel-places-traffic-sign-street-sign-traffic-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="4" r="3.5"></svg:circle><svg:path d="M7 7.5v6m-1.5 0h3"></svg:path></svg:g>`,
})
export class StreamlineTravelPlacesTrafficSignStreetSignTrafficTravelIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
