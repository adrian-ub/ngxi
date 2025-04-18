import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsActivityZoneIcon],svg[arcticons-activity-zone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="18.595" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.405V2.5m0 43v-2.905M42.595 24H45.5m-43 0h2.905m37.19 0l-9.298-9.297l-16.451 16.451m7.503-14.307L7.897 33.298"></svg:path>`,
})
export class ArcticonsActivityZoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
