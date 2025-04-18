import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMapMarkerIcon],svg[oi-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C2.34 0 1 1.34 1 3c0 2 3 5 3 5s3-3 3-5c0-1.66-1.34-3-3-3m0 1a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4"></svg:path>`,
})
export class OiMapMarkerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
