import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapMarkerAreaLineIcon],svg[majesticons-map-marker-area-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 16.016c1.245.529 2 1.223 2 1.984c0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984"></svg:path><svg:path d="M17 8.444C17 11.537 12 17 12 17s-5-5.463-5-8.556S9.239 3 12 3s5 2.352 5 5.444"></svg:path><svg:circle cx="12" cy="8" r="1"></svg:circle></svg:g>`,
})
export class MajesticonsMapMarkerAreaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
