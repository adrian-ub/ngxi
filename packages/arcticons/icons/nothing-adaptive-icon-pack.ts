import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingAdaptiveIconPackIcon],svg[arcticons-nothing-adaptive-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="17.75" cy="27.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.75" cy="25.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.75" cy="22.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.75" cy="20.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.75" cy="17.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.75" cy="15.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.25" cy="30.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.25" cy="27.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.25" cy="25.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.25" cy="22.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.25" cy="20.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.25" cy="17.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.75" cy="32.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.75" cy="30.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.75" cy="27.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.75" cy="25.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.75" cy="22.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.75" cy="20.25" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25 15.781v12.438c0 .2.078.39.219.531l4 4a.75.75 0 0 0 1.281-.531V19.781a.75.75 0 0 0-.219-.531l-4-4a.75.75 0 0 0-1.281.53"></svg:path>`,
})
export class ArcticonsNothingAdaptiveIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
