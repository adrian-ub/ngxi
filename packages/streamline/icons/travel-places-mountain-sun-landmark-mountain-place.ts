import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesMountainSunLandmarkMountainPlaceIcon],svg[streamline-travel-places-mountain-sun-landmark-mountain-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.5 9.26l-3.79-5a1 1 0 0 0-1.42 0L.5 13.5h13"></svg:path><svg:path d="m4.69 8.5l1.47 1a1 1 0 0 0 1.16 0l.89-.67a1 1 0 0 1 1.2 0l.89.67a1 1 0 0 0 1.15 0l1.48-1"></svg:path><svg:circle cx="3" cy="3" r="2.5"></svg:circle></svg:g>`,
})
export class StreamlineTravelPlacesMountainSunLandmarkMountainPlaceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
