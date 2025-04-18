import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJakdojadeIcon],svg[arcticons-jakdojade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.04" cy="24.35" r="4.54" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="37.6" cy="12.39" r="5.9" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="19.19" cy="37.99" r="3.52" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M16.29 36a24.4 24.4 0 0 1-5.6-7.41m22.57-12.22A77.8 77.8 0 0 0 20.58 34.7"></svg:path><svg:circle cx="9.04" cy="24.35" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.19" cy="37.99" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.6" cy="12.39" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJakdojadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
