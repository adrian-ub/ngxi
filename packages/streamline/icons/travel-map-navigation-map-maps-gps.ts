import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelMapNavigationMapMapsGpsIcon],svg[streamline-travel-map-navigation-map-maps-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.83 12.5l-4.33 1v-12l4.33-1v12zm0 0l4.34 1v-12L4.83.5v12zm8.67 0l-4.33 1v-12l4.33-1v12z"></svg:path>`,
})
export class StreamlineTravelMapNavigationMapMapsGpsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
