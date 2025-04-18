import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGstringsIcon],svg[arcticons-gstrings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.83 20.47l-1.65 1.4m-29.65-1.3l1.65 1.4m4.38-6.5l1.12 1.85m8.42-4.34v2.16m.36 16.26l9.23-16.2m9.81 12.2a4 4 0 0 1-4 4h-31a4 4 0 0 1-4-4"></svg:path><svg:rect width="39" height="33.89" x="4.5" y="7.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4"></svg:rect><svg:circle cx="27.43" cy="34.74" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.39" cy="34.74" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.35" cy="34.74" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.31" cy="34.74" r=".75" fill="currentColor"></svg:circle><svg:circle cx="39.27" cy="34.74" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.43" cy="37.66" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.39" cy="37.66" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.35" cy="37.66" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.31" cy="37.66" r=".75" fill="currentColor"></svg:circle><svg:circle cx="39.27" cy="37.66" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsGstringsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
