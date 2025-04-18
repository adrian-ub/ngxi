import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKinemasterIcon],svg[arcticons-kinemaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.374 13.533v20.934m11.252 0L20.991 24l8.635-10.467M20.991 24h-2.617"></svg:path><svg:circle cx="24" cy="6" r=".75" fill="currentColor"></svg:circle><svg:circle cx="41.119" cy="18.438" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.58" cy="38.562" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.42" cy="38.562" r=".75" fill="currentColor"></svg:circle><svg:circle cx="6.881" cy="18.438" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="6" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsKinemasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
