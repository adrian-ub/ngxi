import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerLeftIcon],svg[mdi-map-marker-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M8 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7S8 5.13 8 9M6 7l-5 5l5 5z"></svg:path>`,
})
export class MdiMapMarkerLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
