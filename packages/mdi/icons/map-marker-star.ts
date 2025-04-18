import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerStarIcon],svg[mdi-map-marker-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7m2.5 11L12 11.5L9.5 13l.7-2.8L8 8.3l2.9-.2L12 5.4L13.1 8l2.9.3l-2.2 1.9z"></svg:path>`,
})
export class MdiMapMarkerStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
