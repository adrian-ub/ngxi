import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRemoveVariantIcon],svg[mdi-map-marker-remove-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7M9.59 5.17L12 7.58l2.41-2.41l1.42 1.41L13.41 9l2.42 2.41l-1.42 1.42L12 10.41l-2.41 2.42l-1.42-1.42L10.59 9L8.17 6.58"></svg:path>`,
})
export class MdiMapMarkerRemoveVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
