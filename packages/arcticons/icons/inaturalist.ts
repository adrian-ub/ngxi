import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInaturalistIcon],svg[arcticons-inaturalist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.56 23.21c.88 0 3.06-8.39 12.94-5.05c-4.76 3.63-2.1 8.66-6.86 15.21A18.47 18.47 0 0 1 22 41.11a18.7 18.7 0 0 1-6.91-1.25A16 16 0 0 0 27 31.61a12.15 12.15 0 0 1-14-5.8a18 18 0 0 1 4.67-.69s-8.14-3.27-9-5.85c1.21-.95 4.94-.42 4.94-.42S5 14.1 4.5 10.86c15.25 0 25.23 12.35 26.06 12.35"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.32 18S19.15 11.42 19 6.89C22.91 7 30.29 13 31.27 22.41"></svg:path><svg:circle cx="37.97" cy="19.87" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsInaturalistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
