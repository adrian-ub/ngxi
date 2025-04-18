import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEinsteinIslandIcon],svg[arcticons-einstein-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.207 10.437l19.984.297c3.67 5.14 5.317 11.287 2.374 19.715c-6.187-2.007-12.74-2.339-19.878.008c.312-7.116.211-14.071-2.48-20.019zm3.564-2.543c1.453-.249 2.823-1.334 4.483.018c1.66 1.351 2.804.72 4.517.091m.147 2.649V6.425"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 30.093l7.069 2.373c4.216 2.84 12.411 3.444 18.217.378L42.5 29.841l-6.84 4.828l.005 2.525c.005 2.524-2.298 4.38-4.573 4.38H13.467c-5.573 0-5.655-4.873-5.52-6.734zm17.529-1.273v6.036"></svg:path><svg:circle cx="15.353" cy="38.36" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.041" cy="38.36" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.731" cy="38.36" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.421" cy="38.36" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsEinsteinIslandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
