import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOsm2gmapsIcon],svg[arcticons-osm2gmaps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5v43M2.5 24h43M5.38 13.25h37.24M5.38 34.751h37.24M13.25 24c0-8.307 4.104-16.516 10.75-21.5C30.646 7.484 34.75 15.693 34.75 24S30.646 40.516 24 45.5C17.354 40.516 13.25 32.307 13.25 24"></svg:path>`,
})
export class ArcticonsOsm2gmapsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
