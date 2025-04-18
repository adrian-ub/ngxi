import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapMarkerPathLineIcon],svg[majesticons-map-marker-path-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0v1m0 7v-1m2 3a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0 0h1m9-2a2 2 0 1 1-2 2m2-2a2 2 0 0 0-2 2m2-2v-1m-2 3h-1"></svg:path><svg:circle cx="5" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="19" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.611-4 6-4 6s-4-3.389-4-6s1.79-4 4-4s4 1.389 4 4"></svg:path><svg:circle cx="17" cy="7" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class MajesticonsMapMarkerPathLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
