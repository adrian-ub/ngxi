import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerRightOutlineIcon],svg[mdi-map-marker-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5M9 2c3.87 0 7 3.13 7 7c0 5.25-7 13-7 13S2 14.25 2 9c0-3.87 3.13-7 7-7m0 2C6.24 4 4 6.24 4 9c0 1 0 3 5 9.71C14 12 14 10 14 9c0-2.76-2.24-5-5-5m9 13l5-5l-5-5z"></svg:path>`,
})
export class MdiMapMarkerRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
