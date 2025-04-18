import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapPointOfInterestIcon],svg[map-point-of-interest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 25.002A5.999 5.999 0 0 0 31 37a6 6 0 0 0 0-11.998m12.001-12.005L38.06 3.03A2.99 2.99 0 0 0 35.221 1H26.98a2.99 2.99 0 0 0-2.854 2.075L19.007 13H6.999A6.004 6.004 0 0 0 1 19.001V49h48V19.001a6.005 6.005 0 0 0-5.999-6.004M10 25.002a3 3 0 0 1-3.001-2.998c0-1.662 1.342-3.003 3.001-3.003s2.999 1.341 2.999 3.003A2.996 2.996 0 0 1 10 25.002m21 18.004c-6.625 0-12.001-5.377-12.001-12.006c0-6.626 5.375-11.999 12.001-11.999S43.001 24.373 43.001 31c0 6.629-5.375 12.006-12.001 12.006"></svg:path>`,
})
export class MapPointOfInterestIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
