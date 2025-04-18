import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesStreetSignCrossroadStreetSignMetaphorDirectionsIcon],svg[streamline-travel-places-street-sign-crossroad-street-sign-metaphor-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 4.5H2.5l-2-2l2-2H7m0 7h4.5l2-2l-2-2H7m0 7H2.5l-2-2l2-2H7m0-6v13"></svg:path>`,
})
export class StreamlineTravelPlacesStreetSignCrossroadStreetSignMetaphorDirectionsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
