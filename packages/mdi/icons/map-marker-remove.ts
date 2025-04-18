import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRemoveIcon],svg[mdi-map-marker-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2C5.14 2 2 5.14 2 9c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 4.5A2.5 2.5 0 0 1 11.5 9A2.5 2.5 0 0 1 9 11.5A2.5 2.5 0 0 1 6.5 9A2.5 2.5 0 0 1 9 6.5m7.58 7.66l-1.41 1.42L17.58 18l-2.41 2.41l1.41 1.41L19 19.41l2.41 2.41l1.42-1.41L20.41 18l2.42-2.42l-1.42-1.42L19 16.58"></svg:path>`,
})
export class MdiMapMarkerRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
