import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixbitIcon],svg[arcticons-pixbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33.282" height="27.12" x="7.363" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".357"></svg:rect><svg:rect width="6.067" height="6.067" x="34.527" y="37.409" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".385"></svg:rect><svg:rect width="22.137" height="6.115" x="7.355" y="37.385" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".368"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.386 19.497h9.857v3.734h-6.571v-3.734"></svg:path><svg:circle cx="34.458" cy="16.638" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.542" cy="16.638" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsPixbitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
