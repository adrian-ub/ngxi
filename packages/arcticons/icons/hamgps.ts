import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHamgpsIcon],svg[arcticons-hamgps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="21.8" ry="12.53" transform="rotate(-30 24.01 23.994)"></svg:ellipse><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="15.28" ry="8.45" transform="rotate(-30 24.01 23.994)"></svg:ellipse><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="8.56" ry="4.37" transform="rotate(-30 24.01 23.994)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.74 13.15l12.52 21.7m-25.14.05l37.76-21.8"></svg:path><svg:circle cx="33.36" cy="22.32" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.61" cy="36.36" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.12" cy="20.95" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.61" cy="11.05" r=".75" fill="currentColor"></svg:circle><svg:circle cx="39.48" cy="21.7" r=".75" fill="currentColor"></svg:circle><svg:circle cx="39.48" cy="24.47" r=".75" fill="currentColor"></svg:circle><svg:circle cx="7.23" cy="30.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.43" cy="20.95" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsHamgpsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
