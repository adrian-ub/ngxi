import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMapMarkerIcon],svg[mage-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 12.8a3.35 3.35 0 1 0 0-6.7a3.35 3.35 0 0 0 0 6.7Z"></svg:path><svg:path d="M12 2.75c-6.7 0-7.817 5.583-6.7 9.815c.983 3.708 3.93 6.242 5.874 8.32a1.117 1.117 0 0 0 1.652 0c1.943-2.078 4.891-4.612 5.874-8.32c1.117-4.232 0-9.815-6.7-9.815Z"></svg:path></svg:g>`,
})
export class MageMapMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
