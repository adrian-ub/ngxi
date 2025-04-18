import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMapMarkerFillIcon],svg[mage-map-marker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.296 4.637a8.71 8.71 0 0 0-12.57 0c-1.53 2-2 5-1.14 8.08c.88 3.33 3.23 5.74 5.12 7.67l.92 1a2 2 0 0 0 .63.45a1.86 1.86 0 0 0 1.51 0a2 2 0 0 0 .62-.44l.93-1c1.89-1.93 4.24-4.34 5.12-7.67c.81-3.09.39-6.09-1.14-8.09m-6.29 8.25a3.48 3.48 0 1 1 3.215-2.15a3.47 3.47 0 0 1-3.215 2.14z"></svg:path>`,
})
export class MageMapMarkerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
