import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRightIcon],svg[mdi-map-marker-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M9 2C5.13 2 2 5.13 2 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m9 15l5-5l-5-5z"></svg:path>`,
})
export class MdiMapMarkerRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
